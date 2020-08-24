import { Component } from '@angular/core';
import { BooksService } from './shared/services/books.service';
import { Book } from './shared/business-objects/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  books: Book[];

  constructor(
    private readonly booksService: BooksService,
  ) { }
}
