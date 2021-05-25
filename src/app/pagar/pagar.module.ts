import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagarPageRoutingModule } from './pagar-routing.module';

import { PagarPage } from './pagar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagarPageRoutingModule
  ],
  declarations: [PagarPage]
})
export class PagarPageModule {}
