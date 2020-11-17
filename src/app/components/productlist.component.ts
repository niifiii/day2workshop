import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  plCartArray: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addProduct(evt): void {
    console.log(evt.target.value);
    this.plCartArray.push(evt.target.value)
    console.log(this.plCartArray);
  }
}
