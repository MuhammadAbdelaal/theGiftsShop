import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductsService } from '../products.service';

@Component({
  selector: 'app-product-detailes',
  templateUrl: './product-detailes.component.html',
  styleUrls: ['./product-detailes.component.scss']
})
export class ProductDetailesComponent implements OnInit {
  
  products:Array<object>; //container for men products
  product:object; //each product

  constructor(private route: ActivatedRoute, _ProductsService: ProductsService) {
    this.products = _ProductsService.menProducts; // fetching men products from the Service
   }

  ngOnInit() {
      // router for each product with unique url
      this.route.paramMap.subscribe(params => {
      this.product = this.products[+params.get('productId')];
    });
  }

}
