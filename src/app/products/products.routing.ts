import { Routes } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PayComponent } from './pay/pay.component';



export const ProductRoutes: Routes = [
  {
    path: 'products',
    children: [
      {
        path: 'products-list',
        component: ListProductsComponent,
      },
      {
        path: 'pay',
        component: PayComponent,
      },
      {
        path: 'products-create',
        component: CreateProductComponent,
      },
      {
        path: 'cart',
        component: CartComponent,
      },
      {
        path: 'checkout',
        component: CheckoutComponent,
      },
      {
        path: ':id',
        component: ProductDetailsComponent,
      },
      {
        path: 'edit/:id',
        component: EditProductComponent,
      },
    ],
  },
];
