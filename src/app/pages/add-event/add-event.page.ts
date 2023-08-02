import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.page.html',
  styleUrls: ['./add-event.page.scss'],
})
export class AddEventPage implements OnInit {

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
  back(){
    this.nav.back();
  }
  publier(){
    this.nav.navigateRoot('tabs/evenement');
  }
}
