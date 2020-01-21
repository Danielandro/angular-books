import { Routes } from "@angular/router";
import { BooksComponent } from "./books/books.component";
import { BookDetailComponent } from "./book-detail/book-detail.component";
import { BookEditComponent } from "./book-edit/book-edit.component";

export const appRoutes: Routes = [
  { path: "books", component: BooksComponent },
  { path: "books/:id", component: BookDetailComponent },
  { path: "books/:id/edit", component: BookEditComponent },
  { path: "", redirectTo: "books", pathMatch: "full" },
  { path: "**", component: BooksComponent }
];
