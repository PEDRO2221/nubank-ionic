import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transferir',
  templateUrl: './transferir.page.html',
  styleUrls: ['./transferir.page.scss'],
})
export class TransferirPage implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }
  CloseTransferir(){
    this.modalController.dismiss();
  }

}