import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: './features/home/home.module#HomeModule',
    // loadChildren: () => import('./features/home/home.module').then(mod => mod.HomeModule),
  },
  {
    path: 'cart',
    loadChildren: './features/cart/cart.module#CartModule'
    // loadChildren: () => import('./features/cart/cart.module').then(mod => mod.CartModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
