import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register-setup',
  templateUrl: './register-setup.page.html',
  styleUrls: ['./register-setup.page.scss'],
})
export class RegisterSetupPage implements OnInit {
  form: any= {
    sexe: '',
    partenaire: '',
  };
  stepRegistration: any=1;
  constructor(
    private nav: NavController
  ) { }

  ngOnInit() {
  }
  register(){
    this.nav.navigateRoot('tabs/accueil');
  }
  stepSuivant(){
    if (this.stepRegistration<3) {
      this.stepRegistration++;
    }
  }
  stepPrecedent(){
    if (this.stepRegistration>1) {
      this.stepRegistration--;
    }
  }
}
