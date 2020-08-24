import { NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [SharedModule, HomeRoutingModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class HomeModule {}
