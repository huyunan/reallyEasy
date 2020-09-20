import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { GlobalPage } from './global.page';
import { HeaderPageModule } from '../header/header.module';
import { FooterPageModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeaderPageModule,
    FooterPageModule,
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
