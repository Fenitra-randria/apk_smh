import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccueilPageRoutingModule } from './accueil-routing.module';

import { AccueilPage } from './accueil.page';

import { ItempublicationComponent } from 'src/app/components/itempublication/itempublication.component';

import { AmissuggerComponent } from 'src/app/components/amissugger/amissugger.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccueilPageRoutingModule
  ],
  declarations: [AccueilPage,ItempublicationComponent,AmissuggerComponent]
})
export class AccueilPageModule {}
