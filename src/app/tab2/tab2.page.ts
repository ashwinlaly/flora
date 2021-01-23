import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
    data: Boolean = true
  
    timeline = [{
      date: new Date(),
      title: "1973",
      author: "John Mybeweeg",
      text: "The Department was started by introducing PUC (Natural Science, Physics and Chemistry) in 1973.",
      type: "picture"
    }, {
      date: new Date(),
      title: "1979 and 1984",
      author: "Miranda Smith",
      text: "The UG Programme in Botany was started in the year 1979 and upgraded to PG level in the year, 1984 in order to meet the demands of Botany in higher studies.",
      type: "video"

    }, {
      date: new Date(),
      title: "1986",
      author: "Ludo Anderson",
      text: "The substantial availability of staff members with Doctorate in the department has lead to establish Research programmes (M. Phil and Ph. D) in Botany in the year, 1986.",
      type: "location"

    }, {
      date: new Date(),
      title: "2001-2002",
      author: "Sara Orwell",
      text: "In the year, 2001-2002, the Branch V Botany (UG) was renamed as Plant Biology and Plant Biotechnology under the branch Va",
      type: "text"
  }]

  constructor() {
  }

  ionViewWillEnter() {
    setTimeout(()=>{
      this.data = false
    }, 2000);
  }
}
