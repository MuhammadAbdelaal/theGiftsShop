import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Array<any> = [];
  
  modalImage: String = "";
  modalPrice: Number;
  modalBrand: String = "";
  modalDesc: String = "";
  modalLongDesc: String = "";

  constructor(_ProductsService: ProductsService) {

    this.products = _ProductsService.products;
    
  }

  setModalData(imagUrl:String, Price:Number, Brand: String, Desc: String, LongDesc: String) {
    this.modalImage = imagUrl;
    this.modalPrice = Price;
    this.modalBrand = Brand;
    this.modalDesc = Desc;
    this.modalLongDesc = LongDesc;
  }


  ngOnInit() {
  }

  myCarouselOptions = {
    loop: false,
    margin: 20,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2
      },
      800: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  }

}
