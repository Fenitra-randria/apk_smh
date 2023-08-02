import { Component } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  openMenu: any;
  constructor(
    public navCtrl: NavController,
    public menu: MenuController
  ) {
  }
  verPage(e) {
    this.navCtrl.navigateRoot(e);
  }
  showMenuClick() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
}
