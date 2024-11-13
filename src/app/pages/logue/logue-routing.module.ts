import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoguePage } from './logue.page';

const routes: Routes = [
  {
    path: '',
    component: LoguePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoguePageRoutingModule {}
