import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.page.html',
  styleUrls: ['./evenement.page.scss'],
})
export class EvenementPage implements OnInit {

  constructor(
    private nav: NavController
  ) { }

  ngOnInit() {
  }
  verPage(e){
    this.nav.navigateRoot(e);
  }
}
