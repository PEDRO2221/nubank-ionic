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
    { icon: "person-outline", text: "Perfil" },
    { icon: "construct-outline", text: "Configurar conta" },
    { icon: "card-outline", text: "Configurar Cartão" },
    { icon: "storefront-outline", text: "Pedir conta PJ" },
    { icon: "mail-outline", text: "Configurar Nortificações" },
    { icon: "phone-portrait-outline", text: "Configurações do app" },
    { icon: "help-circle-outline", text: "Sobre" },    
  ];
}
