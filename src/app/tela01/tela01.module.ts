import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tela01PageRoutingModule } from './tela01-routing.module';

import { Tela01Page } from './tela01.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tela01PageRoutingModule
  ],
  declarations: [Tela01Page]
})
export class Tela01PageModule {}
