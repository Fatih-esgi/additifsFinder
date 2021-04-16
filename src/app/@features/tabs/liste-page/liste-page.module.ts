import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListePageRoutingModule } from './liste-page-routing.module';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListePageComponent } from './liste-page.component';


@NgModule({
  declarations: [
    ListePageComponent
  ],
  imports: [
    CommonModule,
    ListePageRoutingModule,
    IonicModule,
    SharedModule
    
  ]
})
export class ListePageModule { }
