import { ModalController } from '@ionic/angular';
import { Component } from '@angular/core';
import {ModalconfPage} from '../modalconf/modalconf.page';
import { PagarPage } from '../pagar/pagar.page';
import { IndicarAmigosPage } from '../indicar-amigos/indicar-amigos.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private modalController:ModalController) { }
OpenModal(){
  this.modalController.create({component:ModalconfPage}).then((modalElement)=>{
    modalElement.present();
  })
}
OpenPagar(){
  this.modalController.create({component:PagarPage}).then((modalElement)=>{
    modalElement.present();
  })
}
OpenAmigos(){
  this.modalController.create({component:IndicarAmigosPage}).then((modalElement)=>{
    modalElement.present();
  })
}
  
  public options: Array<any> = [
    { icon: "barcode-outline", text: "Pagar",rota :1},
    { icon: "person-add-outline", text: "Indicar amigos",rota :2 },
    { icon: "swap-vertical-outline", text: "Transferir",rota :3 },
    { icon: "download-outline", text: "Depositar",rota : 4},
    { icon: "cash-outline", text: "Empréstimo",rota :5 },
    { icon: "card-outline", text: "Cartão Virtual",rota :6 },
    { icon: "phone-portrait-outline", text: "Recarga de celular",rota :7 },
    { icon: "construct-outline", text: "Ajustar limite",rota :8 },
    { icon: "lock-closed-outline", text: "Bloquear Cartão",rota :9 },
    { icon: "help-circle-outline", text: "Me ajuda",rota :0 },
  ];
  public slideOptions: any = { slidesPerView: 3, freeMode: true };
  public navegateTo(rota){
    switch (rota){
      case 1 : this.OpenPagar();
      break;
      case 2 : this.OpenAmigos();
      break;
      case 3 : this.OpenModal();
      break;
      case 4 : this.OpenModal();
      break;
      case 5 : this.OpenModal();
      break;
      case 6 : this.OpenModal();
      break;
      case 7 : this.OpenModal();
      break;
      case 8 : this.OpenModal();
      break;
      case 9 : this.OpenModal();
      break;
      case 0 : this.OpenModal();
      break;
    }
  }
}
