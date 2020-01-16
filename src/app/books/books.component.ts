import { Component, OnInit } from "@angular/core";
import Book from "./book";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.css"]
})
export class BooksComponent implements OnInit {
  books: Book[] = [
    {
      id: 1,
      title: "Thinking fast and slow",
      author: "Daniel Kahneman"
    },
    {
      id: 2,
      title: "The BFG",
      author: "Roald Dahl"
    },
    {
      id: 3,
      title: "The Alchemist",
      author: "Paolo Coelho"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
