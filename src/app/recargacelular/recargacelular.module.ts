import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecargacelularPageRoutingModule } from './recargacelular-routing.module';

import { RecargacelularPage } from './recargacelular.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecargacelularPageRoutingModule
  ],
  declarations: [RecargacelularPage]
})
export class RecargacelularPageModule {}
