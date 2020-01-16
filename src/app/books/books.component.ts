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

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe(books => {
      this.books = books;
    });
  }

  add(title: string, author: string): void {
    // make sure fields are not blank
    title = title.trim().toLocaleLowerCase();
    author = author.trim().toLocaleLowerCase();

    if (!title || !author) {
      return;
    }

    this.bookService
      .addBook({ id: 0, title, author } as IBook)
      .subscribe(newBook => {
        console.log(`Adding => Author Name: ${author}, Book Title: ${title}`);
        this.books.push(newBook);
      });
  }
}
