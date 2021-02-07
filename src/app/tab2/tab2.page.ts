import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
    @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
    data: Boolean = true
  
    timeline = [{
      date: new Date(),
      title: "1973",
      subtitle : "",
      text: "The Department was started by introducing PUC (Natural Science, Physics and Chemistry) in 1973.",
    }, {
      date: new Date(),
      title: "1979 and 1984",
      subtitle : "",
      text: "The UG Programme in Botany was started in the year 1979 and upgraded to PG level in the year, 1984 in order to meet the demands of Botany in higher studies.",
    }, {
      date: new Date(),
      title: "1986",
      subtitle : "",
      text: "The substantial availability of staff members with Doctorate in the department has lead to establish Research programmes (M. Phil and Ph. D) in Botany in the year, 1986.",

    }, {
      date: new Date(),
      title: "2001-2002",
      subtitle : "",
      text: "In the year, 2001-2002, the Branch V Botany (UG) was renamed as Plant Biology and Plant Biotechnology under the branch Va",
    }, {
      date: new Date(),
      title: "2017",
      subtitle : "Certificate Course in Bonsai",
      text: "An art of growning ornamental trees in pots; the technology transfer and skill development for students, women self-help group and public to become entrepreneur.",
    }, {
      date: new Date(),
      title: "2017",
      subtitle : "PG Diploma in Biodiversity",
      text: "To have a comprehensive understanding of the science of species interaction for ecological balance and environmental security.",
  }]

  constructor() {
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.timeline.length == 3) {
        event.target.disabled = true;
      }
    }, 500);
  }

  ionViewWillEnter() {
    setTimeout(()=>{
      this.data = false
    }, 2000);
  }
}
