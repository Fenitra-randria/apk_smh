import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController, ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss'],
})
export class MenuHeaderComponent implements OnInit {

  modalDeconnect: any;

  constructor(
    public menu: MenuController,
    public nav: NavController,
    public loadingCtrl: LoadingController,
    public modal: ModalController
  ) { }

  ngOnInit() {
  }
  hideMenu() {
    this.menu.close();
  }
  verPage(e) {
    // this.modal.dismiss();
    this.loadingCtrl.create({
      spinner: 'bubbles',
      backdropDismiss: false,
      cssClass: 'loadGlobal'
      }).then((res) => {
          res.present();
          setTimeout(() => {
            this.loadingCtrl.dismiss();
            this.nav.navigateRoot(e);
          }, 500);
      });
  }
  showmodaldisconnect() {
    this.modalDeconnect = !this.modalDeconnect;
  }
  deconnect(e) {
    this.modalDeconnect = false;
    localStorage.setItem('authentificate','false');
    this.loadingCtrl.create({
      spinner: 'bubbles',
      backdropDismiss: false,
      cssClass: 'loadGlobal'
      }).then((res) => {
          res.present();
          setTimeout(() => {
            this.loadingCtrl.dismiss();
            this.nav.navigateRoot(e);
          }, 500);
      });
  }
}
