import { Component } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: 'cart.component.html',
  styles:[`
  .img-card-empty { font-size: 200px; width: 200px !important; height: 200px !important; }
  .text--white { color: white !important; }
  .btn-icons { margin-right: 0px !important; margin-left: 0.5rem !important; }
  `]
})
export class CartComponent {

  cart: Cart = { items: [{
    product: 'https://via.placeholder.com/150',
    name: 'Product 1',
    price: 5000,
    quantity: 3,
    id: 1
  },{
    product: 'https://via.placeholder.com/150',
    name: 'Product 2',
    price: 200,
    quantity: 2,
    id: 1
  }] };

  dataSource: Array<CartItem> = [];

  displayedColumns: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ];

  constructor(private cartService: CartService){}

  ngOnInit(): void{
    this.cartService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart;
      this.dataSource = this.cart.items;
    });
  }

  getTotal(items: Array<CartItem>): number{
    return this.cartService.getTotal(items);
  }

  oneClearCart(): void{
    this.cartService.clearCart();
  }

  onRemoveFromCart(item: CartItem): void{
    this.cartService.removeFromCart(item);
  }

  onUpdateQuantity(item: CartItem, operation: String): void{
    this.cartService.updateQuantity(item, operation);
  }

}
