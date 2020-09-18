import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { GlobalPage } from './global.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: GlobalPage,
      }
    ]),
    IonicModule
  ],
  declarations: [GlobalPage]
})
export class GlobalPageModule {}
