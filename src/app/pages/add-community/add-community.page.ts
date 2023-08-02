import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-community',
  templateUrl: './add-community.page.html',
  styleUrls: ['./add-community.page.scss'],
})
export class AddCommunityPage implements OnInit {

  constructor(
    private nav: NavController
  ) { }

  ngOnInit() {
  }
  back(){
    this.nav.back();
  }

}
