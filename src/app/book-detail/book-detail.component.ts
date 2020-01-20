import { Component, OnInit } from "@angular/core";
import IBook from "../books/book";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-book-detail",
  templateUrl: "./book-detail.component.html",
  styleUrls: ["./book-detail.component.css"]
})
export class BookDetailComponent implements OnInit {
  book: IBook = {
    id: 7,
    title: "crime and punishment",
    author: "Fyodor Dostoyevsky"
  };
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get("id");
    this.book.id = id;
  }
  save() {
    // call the books service method saveBook(author, title)
    // service should return an observable
    // page should redirect back to home route (/books)
  }
}
