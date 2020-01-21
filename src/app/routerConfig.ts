import { Routes } from "@angular/router";
import { BooksComponent } from "./books/books.component";
import { BookDetailComponent } from "./book-detail/book-detail.component";

export const appRoutes: Routes = [
  { path: "books", component: BooksComponent },
  { path: "books/:id", component: BookDetailComponent },
  { path: "", redirectTo: "books", pathMatch: "full" },
  { path: "**", component: BooksComponent }
];
