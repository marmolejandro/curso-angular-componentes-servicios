import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  AfterViewInit,
  OnDestroy
} from '@angular/core';
import { CommonModule } from '@angular/common';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-img',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './img.component.html',
  styleUrl: './img.component.scss'
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  // ---------------------------------------------------------------------
  // Ciclos
  // ---------------------------------------------------------------------
  constructor(){
    // before render
    // NO async -- once time
    console.log('Constructor: ', 'imgValue => ', this.img);
  }
  ngOnChanges(): void {
    // before & during render
    // inputs changes -- many times - each change
    console.log('ngOnChanges: ', 'imgValue => ', this.img);
  }
  ngOnInit(): void {
    // before render
    // async - fetch -- once time
    console.log('ngOnInit: ', 'imgValue => ', this.img);
  }
  // Grupo ngDoCheck
  ngAfterViewInit(): void {
    // after render
    // handler children
    console.log('ngAfterViewInit');
  }
  ngOnDestroy(): void {
    // delete component
    console.log('ngOnDestroy');
  }

  // ---------------------------------------------------------------------
  // ---------------------------------------------------------------------

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
