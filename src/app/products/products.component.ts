import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() {
    window.scroll(0,0); //prevent scrolling dowon as default behavior
   }

  ngOnInit() {
  }

}
