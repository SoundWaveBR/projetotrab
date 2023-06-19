import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tela03PageRoutingModule } from './tela03-routing.module';

import { Tela03Page } from './tela03.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tela03PageRoutingModule
  ],
  declarations: [Tela03Page]
})
export class Tela03PageModule {}
