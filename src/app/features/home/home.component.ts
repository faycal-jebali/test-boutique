import { Component, OnInit } from '@angular/core';
import { Book } from '../../shared/business-objects/book';
import { select, Store } from '@ngrx/store';
import { GetItems } from '../../shared/store/actions';
@Component({
  selector: 'my-org-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private store: Store<{ items: Book[]; cart: [] }>) {
    store.subscribe((data: any) => {
      this.items = data.items;
    });
  }

  items: Book[] = [];

  ngOnInit() {
    this.store.dispatch(new GetItems());
  }
}
