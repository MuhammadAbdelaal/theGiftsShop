import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Array<any> = [];
  type: string = 'Men';
  menClicked:boolean = true;
  womenClicked: boolean = false;

  modalImage: String = "";
  modalPrice: Number;
  modalBrand: String = "";
  modalDesc: String = "";
  modalLongDesc: String = "";

  constructor(_ProductsService: ProductsService) {
    window.scroll(0,0); //prevent scrolling down as default behavior

    this.products = _ProductsService.products;
   }

  ngOnInit() {


  }


  setType(type:string){
    this.type = type;
    this.menClicked = !this.menClicked;
    this.womenClicked = !this.womenClicked;
  }

  
  setModalData(imagUrl:String, price:Number, brand: String, desc: String, longDesc: String) {
    this.modalImage = imagUrl;
    this.modalPrice = price;
    this.modalBrand = brand;
    this.modalDesc = desc;
    this.modalLongDesc = longDesc;
  }
}
