import { TransferirPage } from './../transferir/transferir.page';
import { EmprestimoPage } from './../emprestimo/emprestimo.page';
import { BloquearcartaoPage } from './../bloquearcartao/bloquearcartao.page';
import { AjudaPage } from './../ajuda/ajuda.page';
import { ModalController } from '@ionic/angular';
import { Component } from '@angular/core';
import {ModalconfPage} from '../modalconf/modalconf.page';
import { PagarPage } from '../pagar/pagar.page';
import { IndicarAmigosPage } from '../indicar-amigos/indicar-amigos.page';
import { DepositPage } from '../deposit/deposit.page';
import { LimitePage } from '../limite/limite.page';
import { RecargacelularPage } from '../recargacelular/recargacelular.page';
import { CartaovirtualPage } from '../cartaovirtual/cartaovirtual.page';

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
OpenAjuda(){
  this.modalController.create({component:AjudaPage}).then((modalElement)=>{
    modalElement.present();
  })
}
OpenBloquear(){
  this.modalController.create({component:BloquearcartaoPage}).then((modalElement)=>{
    modalElement.present();
  })
}
OpenDeposit(){
  this.modalController.create({component:DepositPage}).then((modalElement)=>{
    modalElement.present();
  })
}
OpenEmprestimo(){
  this.modalController.create({component:EmprestimoPage}).then((modalElement)=>{
    modalElement.present();
  })
}
OpenLimite(){
  this.modalController.create({component:LimitePage}).then((modalElement)=>{
    modalElement.present();
  })
}
OpenCartao(){
  this.modalController.create({component:CartaovirtualPage}).then((modalElement)=>{
    modalElement.present();
  })
}
OpenRecarregar(){
  this.modalController.create({component:RecargacelularPage}).then((modalElement)=>{
    modalElement.present();
  })
}
OpenTransferir(){
  this.modalController.create({component:TransferirPage}).then((modalElement)=>{
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
      case 3 : this.OpenTransferir();
      break;
      case 4 : this.OpenDeposit();
      break;
      case 5 : this.OpenEmprestimo();
      break;
      case 6 : this.OpenCartao();
      break;
      case 7 : this.OpenRecarregar();
      break;
      case 8 : this.OpenBloquear();
      break;
      case 9 : this.OpenLimite();
      break;
      case 0 : this.OpenAjuda();
      break;
    }
  }
}
