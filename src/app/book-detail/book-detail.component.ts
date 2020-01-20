import { Component, OnInit } from "@angular/core";
import IBook from "../books/book";
import { ActivatedRoute } from "@angular/router";
import { BookService } from "../books/book.service";

@Component({
  selector: "app-book-detail",
  templateUrl: "./book-detail.component.html",
  styleUrls: ["./book-detail.component.css"]
})
export class BookDetailComponent implements OnInit {
  book: IBook;
  constructor(private route: ActivatedRoute, private bookService: BookService) {
    console.log("Before Book", this.book);
  }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get("id");
    this.bookService.getBook(id).subscribe(book => (this.book = book));

    console.log("After Book", this.book);
  }
  save() {
    // call the books service method saveBook(author, title)
    // service should return an observable
    // page should redirect back to home route (/books)
  }
}
