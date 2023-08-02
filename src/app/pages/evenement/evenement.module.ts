import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EvenementPageRoutingModule } from './evenement-routing.module';

import { EvenementPage } from './evenement.page';

import { FiltreeventComponent } from 'src/app/components/filtreevent/filtreevent.component';

import { ItemeventComponent } from 'src/app/components/itemevent/itemevent.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EvenementPageRoutingModule
  ],
  declarations: [EvenementPage,FiltreeventComponent,ItemeventComponent]
})
export class EvenementPageModule {}
