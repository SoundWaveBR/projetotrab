import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tela02PageRoutingModule } from './tela02-routing.module';

import { Tela02Page } from './tela02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tela02PageRoutingModule
  ],
  declarations: [Tela02Page]
})
export class Tela02PageModule {}
