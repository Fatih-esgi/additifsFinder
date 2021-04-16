import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListePageComponent } from './liste-page.component';

const routes: Routes = [
  {path:"" , component:ListePageComponent }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListePageRoutingModule { }
