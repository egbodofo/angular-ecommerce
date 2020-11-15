import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import { Observable } from 'rxjs';
import * as cartActions from '../cart/store/cart.actions';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  cartProducts: Observable<Array<any>>;
  cartTotal: any = this.store.select(store => store.cartList.total);
  total: any;

  constructor(
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit(): void {
    this.cartProducts = this.store.select(store => store.cartList.addedItems);
    this.cartTotal.subscribe( currentTotal => {
      this.total = currentTotal;
    });
  }
}

