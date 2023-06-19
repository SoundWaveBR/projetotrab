import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tela03Page } from './tela03.page';

const routes: Routes = [
  {
    path: '',
    component: Tela03Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tela03PageRoutingModule {}
