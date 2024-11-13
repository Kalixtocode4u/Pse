import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoguePageRoutingModule } from './logue-routing.module';

import { LoguePage } from './logue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoguePageRoutingModule
  ],
  declarations: [LoguePage]
})
export class LoguePageModule {}
