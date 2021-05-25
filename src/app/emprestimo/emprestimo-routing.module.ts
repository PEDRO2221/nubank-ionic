import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmprestimoPage } from './emprestimo.page';

const routes: Routes = [
  {
    path: '',
    component: EmprestimoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmprestimoPageRoutingModule {}
