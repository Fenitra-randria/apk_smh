import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddActivityPageRoutingModule } from './add-activity-routing.module';

import { AddActivityPage } from './add-activity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddActivityPageRoutingModule
  ],
  declarations: [AddActivityPage]
})
export class AddActivityPageModule {}
