import { Injectable } from "@angular/core";
import IBook from "./book";
import { Observable, throwError, of } from "rxjs";
import { catchError, filter, map, tap } from "rxjs/operators";
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

  // SEARCH for books
  searchBooks(searchTerm: string): Observable<IBook[]> {
    return this.getBooks().pipe(
      tap(_ => console.log(`Fetching search results for ${searchTerm}`)),
      map(books => books.filter(book => book.title.indexOf(searchTerm) !== -1))
    );
  }

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

  private genId(books: IBook[]): number {
    // if there are no books return 1
    // otherwise find highest id and add 1
    return books.length > 0 ? Math.max(...books.map(book => book.id)) : 1;
  }
}
