import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'json',
    loadChildren: () => import('./json/json.module').then(m => m.JsonPageModule)
  },
  {
    path: 'global',
    loadChildren: () => import('./global/global.module').then(m => m.GlobalPageModule)
  },
  {
    path: 'variable',
    loadChildren: () => import('./variable/variable.module').then(m => m.VariablePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EasyPageRoutingModule { }
