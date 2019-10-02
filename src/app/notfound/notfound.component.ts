import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent implements OnInit {

  constructor() {
    window.scroll(0,0); //prevent scrolling dowon as default behavior
   }

  ngOnInit() {
  }

}
