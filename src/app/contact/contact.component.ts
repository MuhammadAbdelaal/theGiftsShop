import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() {
    window.scroll(0,0); //prevent scrolling dowon as default behavior
   }

  ngOnInit() {
  }

}
