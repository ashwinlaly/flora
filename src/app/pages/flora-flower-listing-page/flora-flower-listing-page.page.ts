import { Component, OnInit } from '@angular/core';
import { FloraService } from '../../services/flora.service';

@Component({
  selector: 'app-flora-flower-listing-page',
  templateUrl: './flora-flower-listing-page.page.html',
  styleUrls: ['./flora-flower-listing-page.page.scss'],
})
export class FloraFlowerListingPagePage implements OnInit {

  flower = []

  constructor(private _flowerService: FloraService) {}

  ngOnInit() {
    this._flowerService.getData().subscribe((res) => {
      this.flower = res
    })
  }

}
