import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndicarAmigosPage } from './indicar-amigos.page';

const routes: Routes = [
  {
    path: '',
    component: IndicarAmigosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndicarAmigosPageRoutingModule {}
