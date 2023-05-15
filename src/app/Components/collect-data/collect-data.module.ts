import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CollectDataPageRoutingModule } from './collect-data-routing.module';

import { CollectDataPage } from './collect-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CollectDataPageRoutingModule
  ],
  declarations: [CollectDataPage],
  exports:[CollectDataPage]
})
export class CollectDataPageModule {}
