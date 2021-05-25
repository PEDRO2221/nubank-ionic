import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.page.html',
  styleUrls: ['./deposit.page.scss'],
})
export class DepositPage implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }
  CloseDeposit(){
    this.modalController.dismiss();
  }

}
