import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OwlModule } from 'ngx-owl-carousel';
import { Routes, RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductDetailesComponent } from './product-detailes/product-detailes.component';



const routes: Routes = [
  {path: '',  redirectTo: '/home',  pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'cart', component: ShoppingCartComponent},
  {path: 'products/:productId', component: ProductDetailesComponent},
  {path: '**', component: NotfoundComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProductsComponent,
    AboutComponent,
    ShoppingCartComponent,
    FooterComponent,
    NotfoundComponent,
    ProductDetailesComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    OwlModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
