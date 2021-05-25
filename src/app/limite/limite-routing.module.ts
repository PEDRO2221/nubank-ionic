import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LimitePage } from './limite.page';

const routes: Routes = [
  {
    path: '',
    component: LimitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LimitePageRoutingModule {}
