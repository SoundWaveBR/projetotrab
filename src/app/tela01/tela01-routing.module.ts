import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tela01Page } from './tela01.page';

const routes: Routes = [
  {
    path: '',
    component: Tela01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tela01PageRoutingModule {}
