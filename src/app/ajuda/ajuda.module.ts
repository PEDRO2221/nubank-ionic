import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjudaPageRoutingModule } from './ajuda-routing.module';

import { AjudaPage } from './ajuda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjudaPageRoutingModule
  ],
  declarations: [AjudaPage]
})
export class AjudaPageModule {}
