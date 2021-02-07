import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import { Flower } from 'src/app/classes/Flower';

@Component({
  selector: 'app-listing-flora',
  templateUrl: './listing-flora.component.html',
  styleUrls: ['./listing-flora.component.scss'],
})
export class ListingFloraComponent implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  
  @Input() flower:any;
  constructor(private router:Router) { }

  ngOnInit() {}

  loadData(event) {
    setTimeout(() => {
      event.target.complete();
        if (this.flower.length == 5) {
          event.target.disabled = true;
        }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  loadFloraDetails(data){
    this.router.navigate(['flora-details-page/'+ data.id])
  }
}
