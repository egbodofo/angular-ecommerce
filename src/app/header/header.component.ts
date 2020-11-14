import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

import { Subscription } from 'rxjs';
import { AccountService } from '../services/account.service';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as cartActions from '../products/cart/store/cart.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  products: any;
  currentProduct = null;
  currentIndex = -1;
  name = '';
  isAuthenticated = false;
  private userSub: Subscription;

  constructor(
    private productService: ProductService,
    private authService: AccountService,
    private store: Store<fromApp.AppState>
    ) { }

  ngOnInit(): void {
    this.readProducts();
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }

  readProducts(): void {
    this.productService.getAll()
      .subscribe(
        data => {
          this.products = data.slice(-3);
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.readProducts();
    this.currentProduct = null;
    this.currentIndex = -1;
  }

  setCurrentProduct(product: any, index: number): void {
    this.currentProduct = product;
    this.currentIndex = index;
  }

  addedCart(product): void{
    this.store.dispatch( new cartActions.AddCart(product));
    alert('Product Added to Cart');
  }
}