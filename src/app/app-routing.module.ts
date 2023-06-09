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
  },
  {
    path: 'tela01',
    loadChildren: () => import('./tela01/tela01.module').then( m => m.Tela01PageModule)
  },
  {
    path: 'tela02',
    loadChildren: () => import('./tela02/tela02.module').then( m => m.Tela02PageModule)
  },  {
    path: 'tela03',
    loadChildren: () => import('./tela03/tela03.module').then( m => m.Tela03PageModule)
  },
  {
    path: 'tela04',
    loadChildren: () => import('./tela04/tela04.module').then( m => m.Tela04PageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
