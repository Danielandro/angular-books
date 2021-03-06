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
  searchBy: string = "title";
  constructor() {}

  ngOnInit() {}

  // emit event to parent as user types in the search field
  onInput() {
    this.searchInput.emit({ term: this.term, searchBy: this.searchBy });
  }

  // emit to parent when user changes search by option
  onSearchByChange(searchBy: string) {
    this.searchBy = searchBy;
    this.term = "";
    this.onInput(); // probably won't need parameter
  }
}
