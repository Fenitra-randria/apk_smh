import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  activeMenu: any='activite';
  constructor(
    private nav: NavController
  ) { }

  ngOnInit() {
  }
  back(){
    this.nav.back();
  }

}
