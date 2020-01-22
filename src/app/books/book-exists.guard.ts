import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";
import { Observable, of, empty } from "rxjs";
import { BookService } from "./book.service";
import IBook from "./book";
import { tap, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class BookExistsResolver implements Resolve<Observable<IBook>> {
  constructor(private bookService: BookService) {}
  resolve(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.bookService.getBook(+next.paramMap.get("id")).pipe(
      tap(console.log),
      catchError(err => empty())
    );
  }
}
