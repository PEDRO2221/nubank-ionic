import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emprestimo',
  templateUrl: './emprestimo.page.html',
  styleUrls: ['./emprestimo.page.scss'],
})
export class EmprestimoPage implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }
  CloseEmprestimo(){
    this.modalController.dismiss();
  }

}
