import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  menProducts:Array<object>;

  constructor(_ProductsService: ProductsService) {
    
    this.menProducts = _ProductsService.menProducts; //fetching men products from the Service
   }
   

  ngOnInit() {
  }

  myCarouselOptions = {
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    responsive:{
      0:{
          items:1,
          nav: false,
      },
      600:{
          items:2
      },
      800:{
          items:3
      },
      1000:{
        items:4
      }
  }
  }

}
