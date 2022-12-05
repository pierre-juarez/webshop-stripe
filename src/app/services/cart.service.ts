import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = new BehaviorSubject<Cart>({items: []});
  
  constructor(private _snackBar: MatSnackBar) { }

  addToCard(item: CartItem): void{
    const items = [...this.cart.value.items];
    const itemInCart = items.find((_item) => _item.id === item.id );
    (itemInCart) ? itemInCart.quantity += 1 : items.push(item);
    this.cart.next({items});
    this._snackBar.open('1 item added to cart.', 'Ok', { duration: 3000 });
    console.log("🚀 ~ file: cart.service.ts:17 ~ CartService ~ addToCard ~ value", this.cart.value)
  }

}
