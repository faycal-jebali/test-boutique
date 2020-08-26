import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Book } from './../business-objects/book';

const pathBack = 'http://henri-potier.xebia.fr/';

@Injectable({
  providedIn: 'root'
})


export class BooksService {
  constructor(private httpClient: HttpClient) { }

  getBooks() {
    return this.httpClient.get<Book[]>(`${pathBack}books`);
  }

  getCommercialOffers(listIsbn: string) {
    return this.httpClient.get<Book>(`${pathBack}books/${listIsbn}/commercialOffers`);
  }
}
