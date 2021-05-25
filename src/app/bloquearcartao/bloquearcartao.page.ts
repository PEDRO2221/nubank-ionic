import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-bloquearcartao',
  templateUrl: './bloquearcartao.page.html',
  styleUrls: ['./bloquearcartao.page.scss'],
})
export class BloquearcartaoPage implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }
  CloseBloquear(){
    this.modalController.dismiss();
  }

}