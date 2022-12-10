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

  getTotal(items: Array<CartItem>): number{
    return items
      .map(item => (item.quantity * item.price))
      .reduce((prev, curr) => (prev + curr), 0);
  }

  clearCart(): void{
    this.cart.next({ items: [] });
    this._snackBar.open('Cart is cleared!', 'Ok', { duration: 3000 });
  }

  removeFromCart(item: CartItem): void{
    const filteredItems = this.cart.value.items.filter(
      (_item) => _item.id !== item.id 
    );
    this.cart.next({ items: filteredItems });
    this._snackBar.open('1 item removed from cart','Ok', { duration: 3000});
  }

  updateQuantity(item: CartItem, operation: String): void{
    let itemRemoved: CartItem | undefined;
    const operator = (operation === 'add') ? (+1) : (-1);
    const filteredItems = this.cart.value.items.map( 
      (_item) => {
        if(_item.quantity !== 0){
          if(_item.id === item.id){ return { ..._item, quantity: _item.quantity + operator } }
        }else{
          itemRemoved = _item;
        }
        return item;
      }
    );
      
    this.cart.next({ items: filteredItems });
    
    if(itemRemoved){
      this.removeFromCart(itemRemoved);
    }

  }

}
