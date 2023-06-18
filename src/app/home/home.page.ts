import { Component } from '@angular/core';
import { AlertController, NavController, ModalController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  valorlabel = "Não faço ideia do que seja isso!";
  labelCentered = true;

  constructor(
    public alertctrl: AlertController,
    public navCtrl: NavController,
    public modalctrl: ModalController,
    public toastCtrl: ToastController
  ) {}

  async alerta(titulo: string, mensagem: string) {
    let alert = await this.alertctrl.create({
      header: titulo,
      message: mensagem,
      buttons: ['Fechar']
    });
    await alert.present();
  }
  

  alteralabel() {
    this.valorlabel = "O jogo! você perdeu!";
  }

  async presentToast(mensagem: string) {
    let toast = await this.toastCtrl.create({
      message: mensagem,
      duration: 6000,
      position: 'bottom',
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favoritado',
          handler: () => {
            console.log('Favoritado');
          }
        },
        {
          text: 'Feito :D',
          role: 'cancelar',
          handler: () => {
            console.log('Cancelar');
          }
        }
      ]
    });
    

    toast.present();
  }
}
