import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tela04PageRoutingModule } from './tela04-routing.module';

import { Tela04Page } from './tela04.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tela04PageRoutingModule
  ],
  declarations: [Tela04Page]
})
export class Tela04PageModule {}
