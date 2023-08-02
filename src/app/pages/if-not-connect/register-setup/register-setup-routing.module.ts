import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterSetupPage } from './register-setup.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterSetupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterSetupPageRoutingModule {}
