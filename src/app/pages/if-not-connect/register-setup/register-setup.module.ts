import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterSetupPageRoutingModule } from './register-setup-routing.module';

import { RegisterSetupPage } from './register-setup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterSetupPageRoutingModule
  ],
  declarations: [RegisterSetupPage]
})
export class RegisterSetupPageModule {}
