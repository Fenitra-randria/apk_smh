import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'accueil',
    loadChildren: () => import('./pages/accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'amis',
    loadChildren: () => import('./pages/amis/amis.module').then( m => m.AmisPageModule)
  },
  {
    path: 'souvenir',
    loadChildren: () => import('./pages/souvenir/souvenir.module').then( m => m.SouvenirPageModule)
  },
  {
    path: 'evenement',
    loadChildren: () => import('./pages/evenement/evenement.module').then( m => m.EvenementPageModule)
  },
  {
    path: 'groups',
    loadChildren: () => import('./pages/groups/groups.module').then( m => m.GroupsPageModule)
  },
  {
    path: 'paiement',
    loadChildren: () => import('./pages/paiement/paiement.module').then( m => m.PaiementPageModule)
  },
  {
    path: 'recherche',
    loadChildren: () => import('./pages/recherche/recherche.module').then( m => m.RecherchePageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./pages/notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'message',
    loadChildren: () => import('./pages/message/message.module').then( m => m.MessagePageModule)
  },
  {
    path: 'community',
    loadChildren: () => import('./pages/community/community.module').then( m => m.CommunityPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'add-activity',
    loadChildren: () => import('./pages/add-activity/add-activity.module').then( m => m.AddActivityPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/if-not-connect/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/if-not-connect/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'register-setup',
    loadChildren: () => import('./pages/if-not-connect/register-setup/register-setup.module').then( m => m.RegisterSetupPageModule)
  },
  {
    path: 'add-event',
    loadChildren: () => import('./pages/add-event/add-event.module').then( m => m.AddEventPageModule)
  },
  {
    path: 'add-group',
    loadChildren: () => import('./pages/add-group/add-group.module').then( m => m.AddGroupPageModule)
  },
  {
    path: 'add-community',
    loadChildren: () => import('./pages/add-community/add-community.module').then( m => m.AddCommunityPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
