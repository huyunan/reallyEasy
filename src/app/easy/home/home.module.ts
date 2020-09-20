import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { RouterModule } from '@angular/router';
import { HeaderPageModule } from '../header/header.module';
import { FooterPageModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderPageModule,
    FooterPageModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
