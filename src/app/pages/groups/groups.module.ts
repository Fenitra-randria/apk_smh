import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroupsPageRoutingModule } from './groups-routing.module';

import { GroupsPage } from './groups.page';

import { ItempublicationComponent } from 'src/app/components/itempublication/itempublication.component';

import { MesgroupsComponent } from 'src/app/components/groups/mesgroups/mesgroups.component';

import { ListgroupsComponent } from 'src/app/components/groups/listgroups/listgroups.component';

import { ListinvitegroupComponent } from 'src/app/components/groups/listinvitegroup/listinvitegroup.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroupsPageRoutingModule
  ],
  declarations: [GroupsPage,ItempublicationComponent,MesgroupsComponent,ListgroupsComponent,ListinvitegroupComponent]
})
export class GroupsPageModule {}
