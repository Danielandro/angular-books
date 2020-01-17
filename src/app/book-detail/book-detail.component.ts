import { Component, OnInit } from "@angular/core";
import IBook from "../books/book";

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
  constructor() {}

  ngOnInit() {}
}
