import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransferirPageRoutingModule } from './transferir-routing.module';

import { TransferirPage } from './transferir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransferirPageRoutingModule
  ],
  declarations: [TransferirPage]
})
export class TransferirPageModule {}
