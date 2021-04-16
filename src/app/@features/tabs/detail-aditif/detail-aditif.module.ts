import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailAditifRoutingModule } from './detail-aditif-routing.module';
import { IonicModule } from '@ionic/angular';
import { DetailAditifComponent } from './detail-aditif.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DetailAditifComponent,
    
  ],
  imports: [
    CommonModule,
    DetailAditifRoutingModule,
    IonicModule,
    SharedModule
  ]
})
export class DetailAditifModule { }
