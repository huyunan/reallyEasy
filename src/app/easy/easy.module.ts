import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { EasyPageRoutingModule } from './easy-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EasyPageRoutingModule,
    IonicModule,
  ],
})
export class EasyPageModule {}
