import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() {
    window.scroll(0,0); //prevent scrolling dowon as default behavior
   }

  ngOnInit() {
  }

}
