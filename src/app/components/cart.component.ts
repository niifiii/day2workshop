import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  @Input() scList: string[];

  
  constructor() { }

  ngOnInit(): void {
  }

  clog(evt): void {
    console.log(this.scList);
    console.log('hello')
  }




}
