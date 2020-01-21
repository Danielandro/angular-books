import { Component, OnInit } from "@angular/core";
import IBook from "../books/book";
import { BookService } from "../books/book.service";
import { Router, ActivatedRoute } from "@angular/router";
import { tap, map, switchMap } from "rxjs/operators";

@Component({
  selector: "app-book-edit",
  templateUrl: "./book-edit.component.html",
  styleUrls: ["./book-edit.component.css"]
})
export class BookEditComponent implements OnInit {
  pageTitle: string;
  book: IBook;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(switchMap(params => this.bookService.getBook(+params.get("id"))))
      .subscribe(book => {
        this.book = book;
        this.pageTitle = `Update ${book.title}`;
      });
  }

  save(book: IBook) {
    this.book.author = this.book.author.toLocaleLowerCase();
    this.book.title = this.book.title.toLocaleLowerCase();
    // call the books service method saveBook(author, title)
    this.bookService
      .updateBook(book)
      .subscribe(() => this.router.navigate(["/books", book.id]));
    // service should return an observable
    // page should redirect back to home route (/books)
  }

  delete(book: IBook) {
    this.bookService
      .deleteBook(book)
      .subscribe(() => this.router.navigate(["/books"]));
  }
}
