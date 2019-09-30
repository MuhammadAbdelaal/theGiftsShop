import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  menProducts: Array<object> = [
    {
      brand: 'brand', desc: "Short Description", price: 334, imgURL: 'assets/img/2.jpg', longDesc: `long description
    long description long description long description long description long description long description long
    description long description long description long description long description long description long  
    long description long description long description long description long description long description long `},

    {
      brand: 'brand', desc: "Short Description", price: 46, imgURL: 'assets/img/23.jpg', longDesc: `long description
    long description long description long description long description long description long description long
    description long description long description long description long description long description long  
    long description long description long description long description long description long description long ` },

    {
      brand: 'brand', desc: "Short Description", price: 77, imgURL: 'assets/img/4.jpg', longDesc: `long description
    long description long description long description long description long description long description long
    description long description long description long description long description long description long  
    long description long description long description long description long description long description long ` },

    {
      brand: 'brand', desc: "Short Description", price: 55, imgURL: 'assets/img/5(2).jpg', longDesc: `long description
    long description long description long description long description long description long description long
    description long description long description long description long description long description long  
    long description long description long description long description long description long description long ` },

    {
      brand: 'brand', desc: "Short Description", price: 999, imgURL: 'assets/img/6(2).jpg', longDesc: `long description
    long description long description long description long description long description long description long
    description long description long description long description long description long description long  
    long description long description long description long description long description long description long` },

    {
      brand: 'brand', desc: "Short Description", price: 56, imgURL: 'assets/img/7(2).jpg', longDesc: `long description
    long description long description long description long description long description long description long
    description long description long description long description long description long description long  
    long description long description long description long description long description long description long ` },

    {
      brand: 'brand', desc: "Short Description", price: 789, imgURL: 'assets/img/11.jpg', longDesc: `long description
    long description long description long description long description long description long description long
    description long description long description long description long description long description long  
    long description long description long description long description long description long description long ` },

    {
      brand: 'brand', desc: "Short Description", price: 433, imgURL: 'assets/img/13.jpg', longDesc: `long description
    long description long description long description long description long description long description long
    description long description long description long description long description long description long  
    long description long description long description long description long description long description long ` },
    {
      brand: 'brand', desc: "Short Description", price: 334, imgURL: 'assets/img/2.jpg', longDesc: `long description
    long description long description long description long description long description long description long
    description long description long description long description long description long description long  
    long description long description long description long description long description long description long `},

    {
      brand: 'brand', desc: "Short Description", price: 46, imgURL: 'assets/img/23.jpg', longDesc: `long description
    long description long description long description long description long description long description long
    description long description long description long description long description long description long  
    long description long description long description long description long description long description long ` },

    {
      brand: 'brand', desc: "Short Description", price: 77, imgURL: 'assets/img/4.jpg', longDesc: `long description
    long description long description long description long description long description long description long
    description long description long description long description long description long description long  
    long description long description long description long description long description long description long ` },
    
  ]

  
  womenProducts: Array<object> = [
    {
      brand: 'brand', desc: "Short Description", price: 334, imgURL: 'assets/img/3.jpg', longDesc: `long description
    long description long description long description long description long description long description long
    description long description long description long description long description long description long  
    long description long description long description long description long description long description long `},

    {
      brand: 'brand', desc: "Short Description", price: 46, imgURL: 'assets/img/5.jpg', longDesc: `long description
    long description long description long description long description long description long description long
    description long description long description long description long description long description long  
    long description long description long description long description long description long description long ` },

    {
      brand: 'brand', desc: "Short Description", price: 77, imgURL: 'assets/img/8.jpg', longDesc: `long description
    long description long description long description long description long description long description long
    description long description long description long description long description long description long  
    long description long description long description long description long description long description long ` },

    {
      brand: 'brand', desc: "Short Description", price: 55, imgURL: 'assets/img/31.jpg', longDesc: `long description
    long description long description long description long description long description long description long
    description long description long description long description long description long description long  
    long description long description long description long description long description long description long ` },

    {
      brand: 'brand', desc: "Short Description", price: 999, imgURL: 'assets/img/17.jpg', longDesc: `long description
    long description long description long description long description long description long description long
    description long description long description long description long description long description long  
    long description long description long description long description long description long description long` },

    {
      brand: 'brand', desc: "Short Description", price: 56, imgURL: 'assets/img/16.jpg', longDesc: `long description
    long description long description long description long description long description long description long
    description long description long description long description long description long description long  
    long description long description long description long description long description long description long ` },

    {
      brand: 'brand', desc: "Short Description", price: 789, imgURL: 'assets/img/18.jpg', longDesc: `long description
    long description long description long description long description long description long description long
    description long description long description long description long description long description long  
    long description long description long description long description long description long description long ` },

    {
      brand: 'brand', desc: "Short Description", price: 433, imgURL: 'assets/img/29.jpg', longDesc: `long description
    long description long description long description long description long description long description long
    description long description long description long description long description long description long  
    long description long description long description long description long description long description long ` },
    {
      brand: 'brand', desc: "Short Description", price: 334, imgURL: 'assets/img/18.jpg', longDesc: `long description
    long description long description long description long description long description long description long
    description long description long description long description long description long description long  
    long description long description long description long description long description long description long `},

    {
      brand: 'brand', desc: "Short Description", price: 46, imgURL: 'assets/img/23.jpg', longDesc: `long description
    long description long description long description long description long description long description long
    description long description long description long description long description long description long  
    long description long description long description long description long description long description long ` },

    {
      brand: 'brand', desc: "Short Description", price: 77, imgURL: 'assets/img/21.jpg', longDesc: `long description
    long description long description long description long description long description long description long
    description long description long description long description long description long description long  
    long description long description long description long description long description long description long ` },
    
  ]

  constructor() { }

 }
