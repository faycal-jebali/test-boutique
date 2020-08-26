import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';

import { Book } from '../../../business-objects/book';
import { BooksService } from '../../../services/books.service';
import { AddToCart, RemoveFromCart } from '../../../store/actions';
import { takeUntil } from 'rxjs/operators';
import { StoreCart } from '../../../business-objects/store-cart';

@Component({
  selector: 'custom-listing-book',
  templateUrl: './listing-book.component.html',
  styleUrls: ['./listing-book.component.scss']
})
export class ListingBookComponent implements OnDestroy {
  books: Book[];
  onDestroySubject = new Subject<void>();

  constructor(
    private readonly booksService: BooksService,
    private store: Store<StoreCart>
  ) {
    this.booksService.getBooks()
    .pipe(takeUntil(this.onDestroySubject))
    .subscribe(
      data => {
        console.log('data :: ' , data);
        this.books = data;
      },
    )
  }

  addToCart(item: Book) {
    this.store.dispatch(new AddToCart(item));
  }

  removeFromCart(item: Book) {
    this.store.dispatch(new RemoveFromCart(item));
  }

  ngOnDestroy(): void {
    this.onDestroySubject.next();
    this.onDestroySubject.complete();
  }
}
