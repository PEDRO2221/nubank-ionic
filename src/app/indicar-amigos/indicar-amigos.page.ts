import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indicar-amigos',
  templateUrl: './indicar-amigos.page.html',
  styleUrls: ['./indicar-amigos.page.scss'],
})
export class IndicarAmigosPage implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }
  CloseAmigos(){
    this.modalController.dismiss();
  }

}
