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
}
