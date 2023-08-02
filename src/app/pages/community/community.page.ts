import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-community',
  templateUrl: './community.page.html',
  styleUrls: ['./community.page.scss'],
})
export class CommunityPage implements OnInit {

  constructor(
    private nav: NavController
  ) { }

  ngOnInit() {
  }
  verPage(e){
    this.nav.navigateRoot(e);
  }
}
