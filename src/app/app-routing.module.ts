import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'teste',
    loadChildren: () => import('./pages/teste/teste.module').then( m => m.TestePageModule)
  },
  {
    path: 'registra',
    loadChildren: () => import('./pages/registra/registra.module').then( m => m.RegistraPageModule)
  },
  {
    path: 'logue',
    loadChildren: () => import('./pages/logue/logue.module').then( m => m.LoguePageModule)
  },
  {
    path: 'painel',
    loadChildren: () => import('./pages/painel/painel.module').then( m => m.PainelPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
