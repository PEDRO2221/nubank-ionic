import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },  {
    path: 'modalconf',
    loadChildren: () => import('./modalconf/modalconf.module').then( m => m.ModalconfPageModule)
  },
  {
    path: 'pagar',
    loadChildren: () => import('./pagar/pagar.module').then( m => m.PagarPageModule)
  },
  {
    path: 'indicar-amigos',
    loadChildren: () => import('./indicar-amigos/indicar-amigos.module').then( m => m.IndicarAmigosPageModule)
  },
  {
    path: 'transferir',
    loadChildren: () => import('./transferir/transferir.module').then( m => m.TransferirPageModule)
  },
  {
    path: 'deposit',
    loadChildren: () => import('./deposit/deposit.module').then( m => m.DepositPageModule)
  },
  {
    path: 'emprestimo',
    loadChildren: () => import('./emprestimo/emprestimo.module').then( m => m.EmprestimoPageModule)
  },
  {
    path: 'cartaovirtual',
    loadChildren: () => import('./cartaovirtual/cartaovirtual.module').then( m => m.CartaovirtualPageModule)
  },
  {
    path: 'recargacelular',
    loadChildren: () => import('./recargacelular/recargacelular.module').then( m => m.RecargacelularPageModule)
  },
  {
    path: 'limite',
    loadChildren: () => import('./limite/limite.module').then( m => m.LimitePageModule)
  },
  {
    path: 'bloquearcartao',
    loadChildren: () => import('./bloquearcartao/bloquearcartao.module').then( m => m.BloquearcartaoPageModule)
  },
  {
    path: 'ajuda',
    loadChildren: () => import('./ajuda/ajuda.module').then( m => m.AjudaPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
