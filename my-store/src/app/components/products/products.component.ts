import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {

  myShoppingCart: Product[] = [];
  total: Number = 0;
  products: Product[] = []

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    // Not Async
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {
    // Async
    this.productsService.getAllProducts()
                        .subscribe(data => {
      console.log(data)
    })
  }

  onAddToShoppingCart(product: Product){
    console.log(product)
    this.storeService.addProducto(product);

    this.total = this.storeService.getTotal();
  }
}
