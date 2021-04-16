import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './tabs.component';

const routes: Routes = [
  {
    path: '',
    component: TabsComponent,
    children: [
      {
        path: 'list',
        loadChildren: () => import('./liste-page/liste-page.module')
                              .then(m => m.ListePageModule)
      },
      {
        path: 'search',
        loadChildren: () => import('./search-page/search-page.module')
                              .then(m => m.SearchPageModule)
      }
    ]
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('../tabs/detail-aditif/detail-aditif.module')
                        .then(m => m.DetailAditifModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsRoutingModule { }
