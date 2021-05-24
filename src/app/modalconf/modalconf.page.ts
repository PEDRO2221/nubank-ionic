import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-modalconf',
  templateUrl: './modalconf.page.html',
  styleUrls: ['./modalconf.page.scss'],
})
export class ModalconfPage implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }
  CloseModal(){
    this.modalController.dismiss();
  }
  public options: Array<any> = [
    { icon: "help-circle-outline", text: "Me ajuda" },
    { icon: "barcode-outline", text: "Pagar" },
    { icon: "person-add-outline", text: "Indicar amigos" },
    { icon: "swap-vertical-outline", text: "Transferir" },
    { icon: "download-outline", text: "Depositar" },
    { icon: "cash-outline", text: "Empréstimo" },
    { icon: "card-outline", text: "Cartão Virtual" },
    { icon: "phone-portrait-outline", text: "Recarga de celular" },
    { icon: "construct-outline", text: "Ajustar limite" },
    { icon: "lock-closed-outline", text: "Bloquear Cartão" },    
  ];
}
