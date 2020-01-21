import { Component, OnInit } from "@angular/core";
import IBook from "../books/book";
import { ActivatedRoute } from "@angular/router";
import { BookService } from "../books/book.service";
import { Location } from "@angular/common";
import { tap, switchMap, map } from "rxjs/operators";
@Component({
  selector: "app-book-detail",
  templateUrl: "./book-detail.component.html",
  styleUrls: ["./book-detail.component.css"]
})
export class BookDetailComponent implements OnInit {
  book: IBook;
  pageTitle: string;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private bookService: BookService
  ) {}

  ngOnInit() {
    // USING SNAPSHOT
    // let id = +this.route.snapshot.paramMap.get("id");
    // this.bookService.getBook(id).subscribe(book => (this.book = book));

    // USING OBSERVABLE
    this.route.paramMap
      .pipe(
        // switchMap returns result of internal observable
        switchMap(params => this.bookService.getBook(+params.get("id")))
      ) // subscribing gives access to response from bookService observable
      .subscribe(book => {
        this.book = book;
        this.pageTitle = `${book.title} Details`;
      });

    // Wrong way to do it - nested observables 😬
    // this.route.paramMap.subscribe(params => {
    //   let id = +params.get("id");
    //   this.bookService.getBook(id).subscribe(book => (this.book = book));
    // });
  }
  // take user to previous page
  goBack() {
    this.location.back();
    // this.router.navigate(["/books", book.id]); -> another way to do it
  }
}
