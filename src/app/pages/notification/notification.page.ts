import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  constructor(
    private nav: NavController
  ) { }

  ngOnInit() {
  }
  back(){
    this.nav.back();
  }
}
