import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientPageComponent } from './components/client-page/client-page.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { ClientCardComponent } from './components/client-card/client-card.component';
import { ClientActionCardComponent } from './components/client-action-card/client-action-card.component';

@NgModule({
  declarations: [ClientPageComponent, ClientListComponent, ClientCardComponent, ClientActionCardComponent],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
