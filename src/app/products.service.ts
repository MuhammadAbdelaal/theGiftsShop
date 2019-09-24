import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  menProducts: Array<object> = [
    {
      brand: 'zara', desc: "Sweetshirt", price: 334, imgURL: '../assets/img/2.jpg', longDesc: `long description
    long description long description long description long description long description long description long
    description long description long description long description long description long description long description 
    long description long description long description long description long description long description long description`},

    {
      brand: 'Gap', desc: "Shirt", price: 46, imgURL: '../assets/img/23.jpg', longDesc: `long description
    long description long description long description long description long description long description long
    description long description long description long description long description long description long description 
    long description long description long description long description long description long description long description` },

    {
      brand: 'Guss', desc: "T-Shirt", price: 77, imgURL: '../assets/img/4.jpg', longDesc: `long description
    long description long description long description long description long description long description long
    description long description long description long description long description long description long description 
    long description long description long description long description long description long description long description` },

    {
      brand: 'Lacoste', desc: "Trousers", price: 55, imgURL: '../assets/img/5(2).jpg', longDesc: `long description
    long description long description long description long description long description long description long
    description long description long description long description long description long description long description 
    long description long description long description long description long description long description long description` },

    {
      brand: 'zara', desc: "Sweetshirt", price: 999, imgURL: '../assets/img/6(2).jpg', longDesc: `long description
    long description long description long description long description long description long description long
    description long description long description long description long description long description long description 
    long description long description long description long description long description long description long description` },

    {
      brand: 'Guss', desc: "Sweetshirt", price: 56, imgURL: '../assets/img/7(2).jpg', longDesc: `long description
    long description long description long description long description long description long description long
    description long description long description long description long description long description long description 
    long description long description long description long description long description long description long description` },

    {
      brand: 'Gap', desc: "Sweetshirt", price: 789, imgURL: '../assets/img/11.jpg', longDesc: `long description
    long description long description long description long description long description long description long
    description long description long description long description long description long description long description 
    long description long description long description long description long description long description long description` },

    {
      brand: 'Lacoste', desc: "Shoes", price: 433, imgURL: '../assets/img/13.jpg', longDesc: `long description
    long description long description long description long description long description long description long
    description long description long description long description long description long description long description 
    long description long description long description long description long description long description long description` },
  ]

  constructor() { }
}
