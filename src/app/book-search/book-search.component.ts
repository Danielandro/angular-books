import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";

@Component({
  selector: "app-book-search",
  templateUrl: "./book-search.component.html",
  styleUrls: ["./book-search.component.css"]
})
export class BookSearchComponent implements OnInit {
  @Output() searchInput: EventEmitter<string> = new EventEmitter<string>();
  userInput: string;
  constructor() {}

  ngOnInit() {}

  onInput(val: string) {
    this.searchInput.emit(val);
  }
}
