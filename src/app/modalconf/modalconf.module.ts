import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalconfPageRoutingModule } from './modalconf-routing.module';

import { ModalconfPage } from './modalconf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalconfPageRoutingModule
  ],
  declarations: [ModalconfPage]
})
export class ModalconfPageModule {}
