import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  items: any = [
    {
      image : "/assets/images/flora2.jpg",
      label : "KASC FLORA"
    },
    {
      image : "/assets/images/flora3.jpg",
      label : "KASC FLORA"
    },
    {
      image : "/assets/images/flora4.jpg",
      label : "KASC FLORA"
    },
    {
      image : "/assets/images/flora5.jpg",
      label : "KASC FLORA"
    },
    {
      image : "/assets/images/flora6.jpg",
      label : "KASC FLORA"
    },
  ]

}
