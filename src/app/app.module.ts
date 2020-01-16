import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { BooksComponent } from "./books/books.component";
import { BookSearchComponent } from './book-search/book-search.component';

@NgModule({
  declarations: [AppComponent, BooksComponent, BookSearchComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
