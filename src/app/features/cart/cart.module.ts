import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';


@NgModule({
  imports: [
    SharedModule,
    CartRoutingModule,
  ],
  declarations: [CartComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class CartModule { }
