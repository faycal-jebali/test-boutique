import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'cart'
  },
  {
    path: 'cart',
    // loadChildren: './features/cart/cart.module#CartModule'
    loadChildren: () => import('./features/cart/cart.module').then(mod => mod.CartModule)
  },
  {
    path: 'home',
    // loadChildren: './features/home/home.module#HomeModule',
    loadChildren: () => import('./features/home/home.module').then(mod => mod.HomeModule),
  },

  {
    path: '**',
    redirectTo: 'cart'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
