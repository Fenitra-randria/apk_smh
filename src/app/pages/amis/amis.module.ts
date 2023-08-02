import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmisPageRoutingModule } from './amis-routing.module';

import { AmisPage } from './amis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmisPageRoutingModule
  ],
  declarations: [AmisPage]
})
export class AmisPageModule {}
