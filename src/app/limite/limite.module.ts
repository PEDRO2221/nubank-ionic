import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LimitePageRoutingModule } from './limite-routing.module';

import { LimitePage } from './limite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LimitePageRoutingModule
  ],
  declarations: [LimitePage]
})
export class LimitePageModule {}
