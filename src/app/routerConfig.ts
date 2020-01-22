import { Routes } from "@angular/router";
import { BooksComponent } from "./books/books.component";
import { BookDetailComponent } from "./book-detail/book-detail.component";
import { BookEditComponent } from "./book-edit/book-edit.component";
import { ValidBookIdGuard } from "./books/valid-book-id.guard";
import { BookExistsResolver } from "./books/book-exists.guard";

export const appRoutes: Routes = [
  { path: "books", component: BooksComponent },
  {
    path: "books/:id",
    component: BookDetailComponent,
    canActivate: [ValidBookIdGuard],
    resolve: { book: BookExistsResolver }
  },
  { path: "books/:id/edit", component: BookEditComponent },
  { path: "", redirectTo: "books", pathMatch: "full" },
  { path: "**", component: BooksComponent }
];
