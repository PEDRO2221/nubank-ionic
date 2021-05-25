import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecargacelularPage } from './recargacelular.page';

const routes: Routes = [
  {
    path: '',
    component: RecargacelularPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecargacelularPageRoutingModule {}
