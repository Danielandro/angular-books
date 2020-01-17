import { Component, OnInit } from "@angular/core";
import IBook from "./book";
import { BookService } from "./book.service";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.css"]
})
export class BooksComponent implements OnInit {
  books: IBook[];
  filteredBooks: IBook[];

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe(books => {
      this.books = books;
      this.filteredBooks = this.books;
    });
  }

  // add a new book
  add(title: string, author: string): void {
    // convert strings to lower case
    title = title.trim().toLocaleLowerCase();
    author = author.trim().toLocaleLowerCase();

    // make sure fields are not blank
    if (!title || !author) {
      return;
    }

    // send data to BookService
    this.bookService
      .addBook({ id: 0, title, author } as IBook)
      .subscribe(newBook => {
        console.log(`Adding => Author Name: ${author}, Book Title: ${title}`);
        this.books.push(newBook);
      });
  }

  // when user starts entering a search
  onSearchInput(searchParams: { term: string; searchBy: string }) {
    // check if term is an empty string
    if (!searchParams.term.trim()) {
      this.filteredBooks = this.books;
    }
    // convert to lowercase
    searchParams.term = searchParams.term.toLocaleLowerCase();
    // get + set filteredBooks
    this.search(searchParams);
  }

  // when user changes search by option
  onSearchByOption(searchParams: { term: string; searchBy: string }) {
    this.search(searchParams);
  }

  private search(searchParams: { term: string; searchBy: string }) {
    this.bookService.searchBooks(searchParams).subscribe(filteredBooks => {
      this.filteredBooks = filteredBooks;
    });
  }

  getDetails(id: number) {
    console.log("Clicked on book with ID: ", id);
  }
}
