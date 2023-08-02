import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    public navCtrl: NavController
  ) {
    this.watchAuth();
  }
  watchAuth(){
    if (localStorage.getItem('authentificate')==='true'||localStorage.getItem('authentificate')=== undefined) {
      this.navCtrl.navigateRoot('tabs/accueil');
    }
    else{
      this.navCtrl.navigateRoot('login');
    }
  }
}
