import { Component, OnInit } from "@angular/core";
import IBook from "../books/book";
import { ActivatedRoute } from "@angular/router";
import { BookService } from "../books/book.service";
import { Location } from "@angular/common";
@Component({
  selector: "app-book-detail",
  templateUrl: "./book-detail.component.html",
  styleUrls: ["./book-detail.component.css"]
})
export class BookDetailComponent implements OnInit {
  book: IBook;
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
    this.route.paramMap.subscribe(params => {
      let id = +params.get("id");
      this.bookService.getBook(id).subscribe(book => (this.book = book));
    });
  }
  // take user to previous page
  goBack() {
    this.location.back();
  }

  save() {
    this.book.author = this.book.author.toLocaleLowerCase();
    this.book.title = this.book.title.toLocaleLowerCase();
    // call the books service method saveBook(author, title)
    this.bookService.updateBook(this.book).subscribe(() => this.goBack());
    // service should return an observable
    // page should redirect back to home route (/books)
  }
}
