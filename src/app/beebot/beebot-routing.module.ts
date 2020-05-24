import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeebotPage } from './beebot.page';

const routes: Routes = [
  {
    path: '',
    component: BeebotPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeebotPageRoutingModule {}
