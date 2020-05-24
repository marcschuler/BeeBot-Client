import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServerStatsPage } from './server-stats.page';

const routes: Routes = [
  {
    path: '',
    component: ServerStatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServerStatsPageRoutingModule {}
