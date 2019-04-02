import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientPageComponent } from './components/client-page/client-page.component';
import { ClientListComponent } from './components/client-list/client-list.component';

const routes: Routes = [
  {
    path: '',
    component: ClientPageComponent,
    children: [
      {
        path: '',
        component: ClientListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
