import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollectDataPage } from './collect-data.page';

const routes: Routes = [
  {
    path: '',
    component: CollectDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollectDataPageRoutingModule {}
