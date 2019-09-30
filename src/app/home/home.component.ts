import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  menProducts:Array<object>;
  subMenProudcts:Array<object>;

  womenProducts:Array<object>;
  subWomenProudcts:Array<object>;

  constructor(_ProductsService: ProductsService) {
    
    this.menProducts = _ProductsService.menProducts; //fetching men products from the Service
    this.subMenProudcts = this.menProducts.slice(0, 5); //get only the first 5 men products

    this.womenProducts = _ProductsService.womenProducts; //fetching men products from the Service
    this.subWomenProudcts = this.womenProducts.slice(0, 5); //get only the first 5 men products




   }
   

  ngOnInit() {
  }

  myCarouselOptions = {
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 1500,
    autoplayHoverPause:true,
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
