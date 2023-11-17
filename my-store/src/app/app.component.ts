import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ImgComponent } from './components/img/img.component';
import { ProductsComponent } from './components/products/products.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FormsModule,

    ImgComponent,
    ProductsComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = 'https://source.unsplash.com/random';
  showImg = true;

  onLoaded(img: string){
    console.log('Log padre', img)
  }

  toggleImg(){
    this.showImg = !this.showImg;
  }
}
