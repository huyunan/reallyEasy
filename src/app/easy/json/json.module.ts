import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { JsonPage } from './json.page';
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
        component: JsonPage,
      }
    ])
  ],
  declarations: [JsonPage]
})
export class JsonPageModule { }
