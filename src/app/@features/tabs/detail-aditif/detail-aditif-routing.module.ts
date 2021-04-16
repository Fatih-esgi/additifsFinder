import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailAditifComponent } from './detail-aditif.component';

const routes: Routes = [
  {path:'',component:DetailAditifComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailAditifRoutingModule { }
