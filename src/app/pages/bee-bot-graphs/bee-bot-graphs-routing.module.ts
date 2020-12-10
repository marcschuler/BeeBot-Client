import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeeBotGraphsPage } from './bee-bot-graphs.page';

const routes: Routes = [
  {
    path: '',
    component: BeeBotGraphsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeeBotGraphsPageRoutingModule {}
