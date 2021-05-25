import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmprestimoPageRoutingModule } from './emprestimo-routing.module';

import { EmprestimoPage } from './emprestimo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmprestimoPageRoutingModule
  ],
  declarations: [EmprestimoPage]
})
export class EmprestimoPageModule {}
