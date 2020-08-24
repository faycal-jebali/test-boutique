import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';

@NgModule({
  imports: [
    CommonModule,
    CartRoutingModule,
  ],
  declarations: [CartComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class CartModule { }
