import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SouvenirPage } from './souvenir.page';

const routes: Routes = [
  {
    path: '',
    component: SouvenirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SouvenirPageRoutingModule {}
