import { Injectable } from "@angular/core";
import IBook from "./book";
import { Observable, throwError, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class BookService {
  bookUrl: string = "http://localhost:3000/books";
  constructor(private http: HttpClient) {}

  // GET all books
  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.bookUrl);
  }

  // GET a book
  getBook(id: number): Observable<IBook> {
    return this.http.get<IBook>(`${this.bookUrl}/${id}`).pipe(
      tap(book => console.log(`Getting book: ${book.title}`)),
      catchError(this.handleError)
    );
  }

  // ADD a new book & its author
  addBook(book: IBook): Observable<any> {
    // generate and set id on new book
    this.getBooks().subscribe(books => {
      book.id = this.genId(books);
    });

    return this.http
      .post(this.bookUrl, book)
      .pipe(catchError(this.handleError));
  }

  // SEARCH for books by title or author
  searchBooks(searchParams: {
    term: string;
    searchBy: string;
  }): Observable<IBook[]> {
    return this.getBooks().pipe(
      tap(_ =>
        console.log(
          `Searching For: ${searchParams.term} by ${searchParams.searchBy}`
        )
      ),
      map(books =>
        books.filter(
          book =>
            book[`${searchParams.searchBy}`].indexOf(searchParams.term) !== -1
        )
      )
    );
  }

  // UPDATE book details
  updateBook(book: IBook): Observable<any> {
    return this.http.patch(`${this.bookUrl}/${book.id}`, book).pipe(
      tap(res => console.log("Update book response: ", res)),
      catchError(this.handleError)
    );
  }

  // DELETE a book
  deleteBook(book: IBook): Observable<any> {
    return this.http.delete(`${this.bookUrl}/${book.id}`).pipe(
      tap(res => console.log("Book deleted: ", book.title)),
      catchError(this.handleError)
    );
  }

  // error handling callback
  handleError(err: HttpErrorResponse) {
    let errorMessage: string;

    // a client side error or network error
    if (err instanceof ErrorEvent) {
      errorMessage = `An error occured: ${err.message}`;
    } else {
      // backend returned unsuccesful response
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  // generate the next unique book id
  private genId(books: IBook[]): number {
    // if there are no books return 1
    // otherwise find highest id and add 1
    return books.length > 0 ? Math.max(...books.map(book => book.id)) : 1;
  }
}
