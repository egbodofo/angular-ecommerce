import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import { Observable } from 'rxjs';
import * as cartActions from './store/cart.actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})


export class CartComponent implements OnInit {
  cartProducts: Observable<Array<any>>;
  cartTotal: any = this.store.select(store => store.cartList.total);
  total: any;
  hasData = false;

  constructor(
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit(): void {
    this.cartProducts = this.store.select(store => store.cartList.addedItems);
    this.cartTotal.subscribe( currentTotal => {
      this.total = currentTotal;
      this.hasData = !!currentTotal;
    });
  }

  onDelete(cartProductId): void {
    this.store.dispatch( new cartActions.RemoveItem(cartProductId) );
  }

  addQuantity(cartProductId): void {
    this.store.dispatch(new cartActions.AddQuantity(cartProductId));
  }

  subQuantity(cartProductId): void {
    this.store.dispatch( new cartActions.SubQuantity(cartProductId) );
  }

}
