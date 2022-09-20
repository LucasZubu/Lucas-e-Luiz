import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  nome='';
  cell='';
  email='';
  ass='';
  msg='';

  constructor(public actionSheetController: ActionSheetController, private alertController: AlertController) {}
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opções',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Pizza',
        role: 'destructive',
        icon: 'pizza-outline',
        id: 'delete-button',
        data: {
          type: 'delete'
        },
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Bebida',
        icon: 'beer-outline',
        data: 10,
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancelar',
        icon: 'close-outline',
        data: 'Data value',
        handler: () => {
          console.log('Play clicked');
        }
      }, ]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      
      message :'<p>Nome</p> <b>'+ this.nome + '</b>'+
      '<p>E-mail</p> <b>'+ this.email + '</b>' +
      '<p>Celular</p> <b>'+ this.cell + '</b>' +
      '<p>Assunto</p> <b>'+ this.ass + '</b>' +
      '<p>Menssagem</p> <b>'+ this.msg + '</b>' ,
      buttons: ['OK'],
    });

    await alert.present();
  }
  
}
