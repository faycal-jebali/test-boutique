import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

import { Book } from '../../../business-objects/book';
import { StoreCart } from '../../../business-objects/store-cart';

@Component({
  selector: 'custom-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnDestroy {
  cart: Book[];
  onDestroySubject = new Subject<void>();

  constructor(private store: Store<StoreCart>) {
    store
      .pipe(
        takeUntil(this.onDestroySubject),
        map((obj: any) => obj.shop))
      .subscribe((data: StoreCart) => {
        this.cart = data.cart;
        const listDistinct2 = [...new Set(this.cart.map(o => o.isbn ))];
        console.log('listDistinct2 : ', listDistinct2);
        const listDistinct = Array.from(new Set(this.cart.map(o => o.isbn )))
        .map(isbn => {
          return {
            book : this.cart.find(o2 => o2.isbn === isbn),
            count : this.cart.find(o2 => o2.isbn === isbn),
          }
        });
        console.log('listDistinct : ', listDistinct);
      });
  }

  ngOnDestroy(): void {
    this.onDestroySubject.next();
    this.onDestroySubject.complete();
  }
}
