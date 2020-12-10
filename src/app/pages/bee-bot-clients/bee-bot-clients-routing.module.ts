import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeeBotClientsPage } from './bee-bot-clients.page';

const routes: Routes = [
  {
    path: '',
    component: BeeBotClientsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeeBotClientsPageRoutingModule {}
