import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'accueil',
        loadChildren: () => import('../pages/accueil/accueil.module').then(m => m.AccueilPageModule)
      },
      {
        path: 'amis',
        loadChildren: () => import('../pages/amis/amis.module').then(m => m.AmisPageModule)
      },
      {
        path: 'souvenir',
        loadChildren: () => import('../pages/souvenir/souvenir.module').then(m => m.SouvenirPageModule)
      },
      {
        path: 'evenement',
        loadChildren: () => import('../pages/evenement/evenement.module').then(m => m.EvenementPageModule)
      },
      {
        path: 'groups',
        loadChildren: () => import('../pages/groups/groups.module').then(m => m.GroupsPageModule)
      },
      {
        path: 'paiement',
        loadChildren: () => import('../pages/paiement/paiement.module').then(m => m.PaiementPageModule)
      },
      {
        path: 'recherche',
        loadChildren: () => import('../pages/recherche/recherche.module').then(m => m.RecherchePageModule)
      },
      {
        path: 'message',
        loadChildren: () => import('../pages/message/message.module').then(m => m.MessagePageModule)
      },
      {
        path: 'notification',
        loadChildren: () => import('../pages/notification/notification.module').then(m => m.NotificationPageModule)
      },
      {
        path: 'community',
        loadChildren: () => import('../pages/community/community.module').then(m => m.CommunityPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/accueil',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/accueil',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
