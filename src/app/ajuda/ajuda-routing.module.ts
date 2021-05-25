import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjudaPage } from './ajuda.page';

const routes: Routes = [
  {
    path: '',
    component: AjudaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjudaPageRoutingModule {}
