import { Injectable } from "@angular/core";
import IBook from "./book";

@Injectable({
  providedIn: "root"
})
export class BookService {
  constructor() {}

  getBooks(): IBook[] {
    return [
      {
        id: 1,
        title: "Thinking fast and slow",
        author: "Daniel Kahneman"
      },
      {
        id: 2,
        title: "The BFG",
        author: "Roald Dahl"
      },
      {
        id: 3,
        title: "The Alchemist",
        author: "Paolo Coelho"
      }
    ];
  }
}
