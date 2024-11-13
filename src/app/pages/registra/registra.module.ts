import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistraPageRoutingModule } from './registra-routing.module';

import { RegistraPage } from './registra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistraPageRoutingModule
  ],
  declarations: [RegistraPage]
})
export class RegistraPageModule {}
