import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagarPage } from './pagar.page';

const routes: Routes = [
  {
    path: '',
    component: PagarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagarPageRoutingModule {}
