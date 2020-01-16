import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { ThrowStmt } from "@angular/compiler";

@Component({
  selector: "app-book-search",
  templateUrl: "./book-search.component.html",
  styleUrls: ["./book-search.component.css"]
})
export class BookSearchComponent implements OnInit {
  searchTerm: string = "fast";

  constructor() {}

  ngOnInit() {}
}
