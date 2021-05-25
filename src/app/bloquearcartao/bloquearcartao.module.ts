import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BloquearcartaoPageRoutingModule } from './bloquearcartao-routing.module';

import { BloquearcartaoPage } from './bloquearcartao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BloquearcartaoPageRoutingModule
  ],
  declarations: [BloquearcartaoPage]
})
export class BloquearcartaoPageModule {}
