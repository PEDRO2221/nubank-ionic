import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartaovirtualPage } from './cartaovirtual.page';

const routes: Routes = [
  {
    path: '',
    component: CartaovirtualPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartaovirtualPageRoutingModule {}
