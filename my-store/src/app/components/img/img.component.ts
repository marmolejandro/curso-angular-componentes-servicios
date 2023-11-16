import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-img',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './img.component.html',
  styleUrl: './img.component.scss'
})
export class ImgComponent {

  @Input() img: string = 'valor init';
  @Output() loaded = new EventEmitter<string>();

  imageDefault = 'https://www.m2crowd.com/core/i/placeholder.png';

  imgError(){
    this.img = this.imageDefault
  }

  @Output() imgLoaded(){
    console.log('Log hijo')
    this.loaded.emit(this.img);
  }
}
