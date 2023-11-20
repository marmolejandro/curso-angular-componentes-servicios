import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ImgComponent } from '../img/img.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ImgComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  @Input('myProduct') product!: Product;
  @Output() addedProduct = new EventEmitter<Product>();

  onAddToCart(){
    this.addedProduct.emit(this.product);
  }
}
