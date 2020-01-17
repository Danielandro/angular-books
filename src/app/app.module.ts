import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { appRoutes } from "./routerConfig";

import { AppComponent } from "./app.component";
import { BooksComponent } from "./books/books.component";
import { BookSearchComponent } from "./book-search/book-search.component";
import { BookDetailComponent } from "./book-detail/book-detail.component";

console.log("App Routes: ", appRoutes);
@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookSearchComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
