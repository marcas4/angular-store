import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/product.model';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  
  constructor(
    private http: HttpClient
  ) {}

  getAllProducts() {
    return this.http.get<Product[]>('https://platzi-store.herokuapp.com/products/') ; 
  }

  getProduct(id: string) {
    return this.http.get(`https://platzi-store.herokuapp.com/products/${id}`);
  }
}
