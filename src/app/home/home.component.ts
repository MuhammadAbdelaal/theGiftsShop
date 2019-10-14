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
  menClicked: boolean;

  constructor(_ProductsService: ProductsService) {
    window.scroll(0,0); //prevent scrolling down as default behavior
    
    this.products = _ProductsService.products;   
  }

  setModalData(imagUrl:String, price:Number, brand: String, desc: String, longDesc: String) {
    this.modalImage = imagUrl;
    this.modalPrice = price;
    this.modalBrand = brand;
    this.modalDesc = desc;
    this.modalLongDesc = longDesc;
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
