import { Routes } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { EditProductComponent } from './edit-product/edit-product.component';

export const ProductRoutes: Routes = [
  {
    path: 'products',
    children: [
      {
        path: 'products-list',
        component: ListProductsComponent,
      },
      {
        path: 'products-create',
        component: CreateProductComponent,
      },
      {
        path: ':id',
        component: ProductDetailsComponent,
      },
      {
        path: 'edit/:id',
        component: EditProductComponent,
      }
    ],
  },
];
