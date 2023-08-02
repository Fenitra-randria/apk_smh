import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {

  activeMenu: any='conversations';
  constructor(
    private nav: NavController
  ) { }

  ngOnInit() {
  }
  back(){
    this.nav.back();
  }

}
