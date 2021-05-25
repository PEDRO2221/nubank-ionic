import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-pagar',
  templateUrl: './pagar.page.html',
  styleUrls: ['./pagar.page.scss'],
})
export class PagarPage implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }
  ClosePagar(){
    this.modalController.dismiss();
  }
}
