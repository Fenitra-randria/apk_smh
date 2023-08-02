import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EvenementPage } from './evenement.page';

const routes: Routes = [
  {
    path: '',
    component: EvenementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvenementPageRoutingModule {}
