import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { ExcerptFilter } from './pipes/excerpt.filter';
import { HeaderComponent } from './components/header/header.component';
import { ListingBookComponent } from './components/book/listing-book/listing-book.component';
import { ShoppingCartComponent } from './components/cart/shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    ListingBookComponent,
    ExcerptFilter,
    HeaderComponent,
    ShoppingCartComponent,
  ],
  imports: [
    // vendor
    CommonModule,
    RouterModule,

    // material
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    // vendor
    CommonModule,
    RouterModule,

    // material
    MatCardModule,
    MatButtonModule,

    // local
    ListingBookComponent,
    ShoppingCartComponent,
    ExcerptFilter,
    HeaderComponent,
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SharedModule {}

