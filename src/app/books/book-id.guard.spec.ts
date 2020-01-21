import { TestBed, async, inject } from '@angular/core/testing';

import { BookIdGuard } from './book-id.guard';

describe('BookIdGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookIdGuard]
    });
  });

  it('should ...', inject([BookIdGuard], (guard: BookIdGuard) => {
    expect(guard).toBeTruthy();
  }));
});
