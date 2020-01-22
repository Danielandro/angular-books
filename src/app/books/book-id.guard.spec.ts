import { TestBed, async, inject } from "@angular/core/testing";

import { ValidBookIdGuard } from "./valid-book-id.guard";

describe("BookIdGuard", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidBookIdGuard]
    });
  });

  it("should ...", inject([ValidBookIdGuard], (guard: ValidBookIdGuard) => {
    expect(guard).toBeTruthy();
  }));
});
