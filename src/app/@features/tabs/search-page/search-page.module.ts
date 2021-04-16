import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchPageRoutingModule } from './search-page-routing.module';
import { IonicModule } from '@ionic/angular';
import { SearchPageComponent } from './search-page.component';


@NgModule({
  declarations: [
    SearchPageComponent
  ],
  imports: [
    CommonModule,
    SearchPageRoutingModule,
    IonicModule
  ]
})
export class SearchPageModule { }
