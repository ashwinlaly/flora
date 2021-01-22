import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {
  text = "!23"
  
  timeline = [{
    date: new Date(),
    title: "Awesome picture",
    author: "John Mybeweeg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    type: "picture"
  }, {
    date: new Date(),
    title: "Look at my video!",
    author: "Miranda Smith",
    text: "Lorem ipsum dolor sit amet",
    type: "video"

  }, {
    date: new Date(),
    title: "I am here",
    author: "Ludo Anderson",
    text: "Lorem ipsum dolor sit amet",
    type: "location"

  }, {
    date: new Date(),
    title: "For my friends",
    author: "Sara Orwell",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    type: "text"

  }]
}
