import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recargacelular',
  templateUrl: './recargacelular.page.html',
  styleUrls: ['./recargacelular.page.scss'],
})
export class RecargacelularPage implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }
  CloseRecarregar(){
    this.modalController.dismiss();
  }

}
