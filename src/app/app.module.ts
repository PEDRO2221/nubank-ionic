import { PagarPageRoutingModule } from './pagar/pagar-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {ModalconfPageModule} from './modalconf/modalconf.module';
import {PagarPageModule} from './pagar/pagar.module';
import {IndicarAmigosPageModule } from './indicar-amigos/indicar-amigos.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ModalconfPageModule, PagarPageModule, IndicarAmigosPageModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
