import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { App } from '@capacitor/core';
import { AlertController, IonRouterOutlet, Platform } from '@ionic/angular';
import { FloraService } from '../services/flora.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private _flowerService: FloraService, 
    public router : Router, 
    private platform: Platform,
    private routerOutlet: IonRouterOutlet,
    private _alert: AlertController
    ) {
    this.platform.backButton.subscribeWithPriority(-1, () => {
      if(!this.routerOutlet.canGoBack){
        App.exitApp();
      }
    })  
  }

  flower = []
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

  ngOnInit() {
    this._flowerService.getData().subscribe((res) => {
      this.flower = res.filter(data => parseInt(data.id)%8 === 0)  
    })
  }

  showFlowerPage() {
    this.router.navigateByUrl('flora-flower-listing-page')
  }
}
