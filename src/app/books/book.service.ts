import { Injectable } from "@angular/core";
import IBook from "./book";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
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
    book.id = 4;
    return this.http
      .post(this.bookUrl, book)
      .pipe(catchError(this.handleError));
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
}
