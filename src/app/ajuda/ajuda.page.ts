import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajuda',
  templateUrl: './ajuda.page.html',
  styleUrls: ['./ajuda.page.scss'],
})
export class AjudaPage implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }
  CloseAjuda(){
    this.modalController.dismiss();
  }

}