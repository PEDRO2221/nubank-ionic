import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cartaovirtual',
  templateUrl: './cartaovirtual.page.html',
  styleUrls: ['./cartaovirtual.page.scss'],
})
export class CartaovirtualPage implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }
  CloseCartao(){
    this.modalController.dismiss();
  }

}
