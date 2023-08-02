import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-amissugger',
  templateUrl: './amissugger.component.html',
  styleUrls: ['./amissugger.component.scss'],
})
export class AmissuggerComponent implements OnInit {

  constructor(
    private nav: NavController
  ) { }

  ngOnInit() {}
  verPage(e) {
    this.nav.navigateRoot(e);
  }
}
