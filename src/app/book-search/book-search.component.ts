import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";

@Component({
  selector: "app-book-search",
  templateUrl: "./book-search.component.html",
  styleUrls: ["./book-search.component.css"]
})
export class BookSearchComponent implements OnInit {
  @Output() searchInput: EventEmitter<{}> = new EventEmitter<{}>();
  @Output() searchByOption: EventEmitter<{}> = new EventEmitter<{}>();

  term: string = "";
  searchBy: string;
  constructor() {}

  ngOnInit() {}

  onInput(term: string) {
    this.term = term;
    this.searchInput.emit({ term: this.term, searchBy: this.searchBy });
  }

  onChange(searchBy: string) {
    this.searchBy = searchBy;
    this.searchByOption.emit({ term: this.term, searchBy: this.searchBy });
  }
}
