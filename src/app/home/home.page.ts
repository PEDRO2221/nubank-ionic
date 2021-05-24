import { ModalController } from '@ionic/angular';
import { Component } from '@angular/core';
import {ModalconfPage} from '../modalconf/modalconf.page';

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

  public options: Array<any> = [
    { icon: "barcode-outline", text: "Pagar" },
    { icon: "person-add-outline", text: "Indicar amigos" },
    { icon: "swap-vertical-outline", text: "Transferir" },
    { icon: "download-outline", text: "Depositar" },
    { icon: "cash-outline", text: "Empréstimo" },
    { icon: "card-outline", text: "Cartão Virtual" },
    { icon: "phone-portrait-outline", text: "Recarga de celular" },
    { icon: "construct-outline", text: "Ajustar limite" },
    { icon: "lock-closed-outline", text: "Bloquear Cartão" },
    { icon: "help-circle-outline", text: "Me ajuda" },
  ];
  public slideOptions: any = { slidesPerView: 3, freeMode: true };
}
