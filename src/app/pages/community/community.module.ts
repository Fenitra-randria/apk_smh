import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommunityPageRoutingModule } from './community-routing.module';

import { CommunityPage } from './community.page';

import { ItempublicationComponent } from 'src/app/components/itempublication/itempublication.component';

import { MescommunityComponent } from 'src/app/components/community/mescommunity/mescommunity.component';

import { ListcommunityComponent } from 'src/app/components/community/listcommunity/listcommunity.component';

import { ListinvitecommunityComponent } from 'src/app/components/community/listinvitecommunity/listinvitecommunity.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommunityPageRoutingModule
  ],
  declarations: [CommunityPage,ItempublicationComponent,MescommunityComponent,ListcommunityComponent,ListinvitecommunityComponent]
})
export class CommunityPageModule {}
