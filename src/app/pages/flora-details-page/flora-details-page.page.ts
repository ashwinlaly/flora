import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FloraService } from 'src/app/services/flora.service';

@Component({
  selector: 'app-flora-details-page',
  templateUrl: './flora-details-page.page.html',
  styleUrls: ['./flora-details-page.page.scss'],
})
export class FloraDetailsPagePage implements OnInit {

  Flower:any
  constructor(
    private router:Router,
    private activateRoute: ActivatedRoute,
    private _floraData : FloraService
  ) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(data => {
      this._floraData.getData().subscribe(res => {
        this.Flower = res.find(item => item.id == data.get("id"))
      })
    })
  }

}
