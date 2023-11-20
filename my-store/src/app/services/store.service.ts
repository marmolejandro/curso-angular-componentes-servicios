import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myShoppingCart: Product[] = [];

  constructor() { }

  addProducto(producto: Product){
    this.myShoppingCart.push(producto);
  }

  getShoppingCart(){
    return this.myShoppingCart;
  }

  getTotal(){
    // reduce((acumulado, item) => (logic operation), initValue)
    return this.myShoppingCart.reduce((sum, item) => (sum + item.price), 0);
  }
}
