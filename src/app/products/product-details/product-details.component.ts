import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { AccountService } from '../../services/account.service';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import * as CartActions from '../cart/store/cart.actions';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  currentProduct = null;
  message = '';
  isAuthenticated = false;
  private userSub: Subscription;

  constructor(
    private productService: ProductService,
    private authService: AccountService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.message = '';
    this.getProduct(this.route.snapshot.paramMap.get('id'));
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }

  getProduct(id): void {
    this.productService.get(id)
      .subscribe(
        data => {
          this.currentProduct = data;
        },
        error => {
          console.log(error);
        });
  }

  deleteProduct(): void {
    this.productService.delete(this.currentProduct._id)
      .subscribe(
        response => {
          this.router.navigate(['/products/all-products']);
        },
        error => {
          console.log(error);
        });
  }

  addCart(): void{
    this.store.dispatch( new CartActions.AddCart(this.currentProduct));
    alert('Product Added to Cart');
  }
}