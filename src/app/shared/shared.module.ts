import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { ExcerptFilter } from './pipes/excerpt.filter';
import { HeaderComponent } from './components/header/header.component';
import { ListingBookComponent } from './components/book/listing-book/listing-book.component';


@NgModule({
  declarations: [
    ListingBookComponent,
    ExcerptFilter,
    HeaderComponent,
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
    ExcerptFilter,
    HeaderComponent,
  ]
})
export class SharedModule {}

