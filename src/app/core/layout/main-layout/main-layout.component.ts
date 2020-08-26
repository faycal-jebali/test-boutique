import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

import { StoreCart } from '../../../shared/business-objects/store-cart';

@Component({
  selector: 'custom-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnDestroy {
  cart = [];
  onDestroySubject = new Subject<void>();

  constructor(private store: Store<StoreCart>) {
    store
      .pipe(
        takeUntil(this.onDestroySubject),
        map((obj: any) => obj.shop))
      .subscribe((data: StoreCart) => {
        this.cart = data.cart;
      });
  }

  ngOnDestroy(): void {
    this.onDestroySubject.next();
    this.onDestroySubject.complete();
  }
}
