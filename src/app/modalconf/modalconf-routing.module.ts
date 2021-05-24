import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalconfPage } from './modalconf.page';

const routes: Routes = [
  {
    path: '',
    component: ModalconfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalconfPageRoutingModule {}
