import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-limite',
  templateUrl: './limite.page.html',
  styleUrls: ['./limite.page.scss'],
})
export class LimitePage implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }
  CloseLimite(){
    this.modalController.dismiss();
  }

}