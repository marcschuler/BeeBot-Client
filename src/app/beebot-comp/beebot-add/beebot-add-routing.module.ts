import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeebotAddPage } from './beebot-add.page';

const routes: Routes = [
  {
    path: '',
    component: BeebotAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeebotAddPageRoutingModule {}
