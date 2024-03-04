import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ProductDtailsComponent } from './components/product-dtails/product-dtails.component';

export const routes: Routes = [
    {path: '', title: 'All Products in Store', component: ProductsComponent},

    {path: 'details/:id', title: 'Product Details', component: ProductDtailsComponent},


];
