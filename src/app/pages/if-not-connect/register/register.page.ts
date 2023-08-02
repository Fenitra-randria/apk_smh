import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController, NavController } from '@ionic/angular';
import { RegisterSetupPage } from '../register-setup/register-setup.page';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    private nav: NavController,
    private modal: ModalController,
    private menu: MenuController
  ) { }

  ngOnInit() {
  }
  register(){
    this.nav.navigateRoot('register-setup');
  }
}
