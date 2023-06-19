import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-tela01',
  templateUrl: './tela01.page.html',
  styleUrls: ['./tela01.page.scss'],
})
export class Tela01Page implements OnInit {

  constructor(private navCtrl: NavController) { }

  irParaPesquisa1() {
    this.navCtrl.navigateForward('/tela02');
  }

  irParaPesquisa2() {
    this.navCtrl.navigateForward('/tela03');
  }

  irParaPesquisa3() {
    this.navCtrl.navigateForward('/tela04');
  }


  ngOnInit() {
  }

}
