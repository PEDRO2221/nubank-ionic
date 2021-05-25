import { RecargacelularPageModule } from './recargacelular/recargacelular.module';
import { LimitePageModule } from './limite/limite.module';
import { EmprestimoPageModule } from './emprestimo/emprestimo.module';
import { DepositPageModule } from './deposit/deposit.module';
import { CartaovirtualPageModule } from './cartaovirtual/cartaovirtual.module';
import { BloquearcartaoPageModule } from './bloquearcartao/bloquearcartao.module';
import { AjudaPageModule } from './ajuda/ajuda.module';
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
import { TransferirPageModule } from './transferir/transferir.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ModalconfPageModule, PagarPageModule, IndicarAmigosPageModule,TransferirPageModule,AjudaPageModule,BloquearcartaoPageModule,CartaovirtualPageModule,DepositPageModule,EmprestimoPageModule,LimitePageModule,RecargacelularPageModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
