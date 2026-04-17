import { Routes } from '@angular/router';
import { ProductComponent } from './pages/product/product';

export const routes: Routes = [
  {
    path: 'products',
    component: ProductComponent,
  },
  {
    path: '**',
    redirectTo: 'products',
  },
];
