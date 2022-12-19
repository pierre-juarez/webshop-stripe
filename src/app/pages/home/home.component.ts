import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { StoreService } from 'src/app/services/store.service';

const ROWS_HEIGHT: { [id: number] : number } = { 1: 300, 3: 335, 4: 350 };

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {

  cols = 3;
  category: string | undefined;
  rowHeight = ROWS_HEIGHT[this.cols];
  products: Array<Product> | undefined;
  sort = 'desc';
  count = '12';
  productsSuscription: Subscription | undefined;

  constructor(
    private cartService: CartService,
    private storeService: StoreService
    ){}

  ngOnInit(): void{
    this.getProducts();
  }

  getProducts(): void{
    this.productsSuscription = this.storeService.getAllProducts(this.count, this.sort)
      .subscribe( (_products) => {
        this.products = _products;
      });
  }
  
  onColumsCountChange(colsNum: number): void{
    this.cols = colsNum;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }

  onShowCategory(newCategory: string): void{
    this.category = newCategory;
  }

  onAddToCard(product: Product): void{
    this.cartService.addToCard({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id
    });
  }

  ngOnDestroy(): void {
    if(this.productsSuscription){
      this.productsSuscription.unsubscribe();
    }
  }

}
