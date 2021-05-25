import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartaovirtualPageRoutingModule } from './cartaovirtual-routing.module';

import { CartaovirtualPage } from './cartaovirtual.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartaovirtualPageRoutingModule
  ],
  declarations: [CartaovirtualPage]
})
export class CartaovirtualPageModule {}
