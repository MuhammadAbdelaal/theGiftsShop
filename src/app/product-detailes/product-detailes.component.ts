import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-detailes',
  templateUrl: './product-detailes.component.html',
  styleUrls: ['./product-detailes.component.scss']
})
export class ProductDetailesComponent implements OnInit {

  products: Array<any> = [];
  product: any; //each product


  constructor(private route: ActivatedRoute, _ProductsService: ProductsService) {
    window.scroll(0,0); //prevent scrolling dowon as default behavior
    
    this.products = _ProductsService.products;
  }

  ngOnInit() {
    // router for each men product with unique url
    this.route.paramMap.subscribe(params => {
      this.product = this.products[params.get('productId')];
    });

  }

}
