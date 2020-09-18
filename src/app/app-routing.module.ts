import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { EasyPageRoutingModule } from './easy/easy-routing.module';

const routes: Routes = [
  {
    path: 'easy',
    loadChildren: () => import('./easy/easy.module').then( m => m.EasyPageModule)
  },
  {
    path: '',
    redirectTo: 'easy',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    EasyPageRoutingModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
