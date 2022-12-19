import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

const BASE_URL_STORE = 'https://fakestoreapi.com';

@Injectable({
  providedIn: 'root'
})

export class StoreService {

  constructor(private httpClient: HttpClient) { }

  getAllProducts(limit = '12', sort = 'desc'): Observable<Array<Product>>{
    return this.httpClient.get<Array<Product>>(
      `${BASE_URL_STORE}/products?sort=${sort}&limit=${limit}`
    );
  }

}
