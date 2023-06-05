import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tela02Page } from './tela02.page';

const routes: Routes = [
  {
    path: '',
    component: Tela02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tela02PageRoutingModule {}
