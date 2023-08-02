import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.page.html',
  styleUrls: ['./add-group.page.scss'],
})
export class AddGroupPage implements OnInit {

  constructor(
    private nav: NavController
  ) { }

  ngOnInit() {
  }
  back(){
    this.nav.back();
  }
}
