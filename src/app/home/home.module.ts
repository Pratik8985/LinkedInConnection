import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CollectDataPageModule } from '../Components/collect-data/collect-data.module';
import { DisplayDataPageModule } from '../Components/display-data/display-data.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    CollectDataPageModule,
    DisplayDataPageModule
  ],
  declarations: [HomePage],
  providers:[HomePageModule]
})
export class HomePageModule {}
