import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { BooksComponent } from "./books/books.component";
import { BookSearchComponent } from "./book-search/book-search.component";
import { BookDetailComponent } from './book-detail/book-detail.component';

@NgModule({
  declarations: [AppComponent, BooksComponent, BookSearchComponent, BookDetailComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
