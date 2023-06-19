import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tela04Page } from './tela04.page';

const routes: Routes = [
  {
    path: '',
    component: Tela04Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tela04PageRoutingModule {}
