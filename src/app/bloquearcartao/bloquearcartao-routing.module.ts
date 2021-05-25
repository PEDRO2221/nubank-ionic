import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BloquearcartaoPage } from './bloquearcartao.page';

const routes: Routes = [
  {
    path: '',
    component: BloquearcartaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BloquearcartaoPageRoutingModule {}
