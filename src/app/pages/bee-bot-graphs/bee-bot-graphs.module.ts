import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeeBotGraphsPageRoutingModule } from './bee-bot-graphs-routing.module';

import { BeeBotGraphsPage } from './bee-bot-graphs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeeBotGraphsPageRoutingModule
  ],
  declarations: [BeeBotGraphsPage]
})
export class BeeBotGraphsPageModule {}
