import { Component, OnInit } from '@angular/core';
import { Cart } from './models/cart.model';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  template: ` 
  <header [cart]="cart"></header>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  title = 'webshop-stripe';
  cart : Cart = { items: [] };

  constructor(private cartService: CartService){}

  ngOnInit(): void{
    this.cartService.cart.subscribe((_cart) => {
      this.cart = _cart;
    });
  }

}
