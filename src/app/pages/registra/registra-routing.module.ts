import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistraPage } from './registra.page';

const routes: Routes = [
  {
    path: '',
    component: RegistraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistraPageRoutingModule {}
