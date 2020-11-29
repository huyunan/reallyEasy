import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VariablePage } from './variable.page';
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
        component: VariablePage,
      }
    ]),
    IonicModule
  ],
  declarations: [VariablePage]
})
export class VariablePageModule {}
