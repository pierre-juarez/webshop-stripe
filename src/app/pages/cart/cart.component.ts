import { Component } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';

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

  ngOnInit(): void{
    this.dataSource = this.cart.items;
  }

  getTotal(items: Array<CartItem>): number{
    return items
      .map(item => (item.quantity * item.price))
      .reduce((prev, curr) => (prev + curr), 0);
  }

}