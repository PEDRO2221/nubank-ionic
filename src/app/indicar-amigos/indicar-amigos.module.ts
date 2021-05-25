import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndicarAmigosPageRoutingModule } from './indicar-amigos-routing.module';

import { IndicarAmigosPage } from './indicar-amigos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndicarAmigosPageRoutingModule
  ],
  declarations: [IndicarAmigosPage]
})
export class IndicarAmigosPageModule {}
