import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmisPage } from './amis.page';

const routes: Routes = [
  {
    path: '',
    component: AmisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmisPageRoutingModule {}
