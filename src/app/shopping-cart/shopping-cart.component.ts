import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  constructor() {
    window.scroll(0,0); //prevent scrolling dowon as default behavior
   }

  ngOnInit() {
  }

}
