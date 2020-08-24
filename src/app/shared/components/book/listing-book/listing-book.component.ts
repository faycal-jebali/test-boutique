import { Component, OnInit } from '@angular/core';

import { Book } from '../../../business-objects/book';
import { BooksService } from '../../../services/books.service';

@Component({
  selector: 'custom-listing-book',
  templateUrl: './listing-book.component.html',
  styleUrls: ['./listing-book.component.scss']
})
export class ListingBookComponent implements OnInit {
  books: Book[];

  constructor(
    private readonly booksService: BooksService,
  ) {
    this.booksService.getBooks().subscribe(
      data => {
        console.log('data :: ' , data);
        this.books = data;
      },
    )
  }

  ngOnInit() {
  }

  addToCart(item: Book) {
    console.log('ADD to Cart : ', item );
  }

}
