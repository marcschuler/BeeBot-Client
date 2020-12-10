import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeeBotClientsPageRoutingModule } from './bee-bot-clients-routing.module';

import { BeeBotClientsPage } from './bee-bot-clients.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeeBotClientsPageRoutingModule
  ],
  declarations: [BeeBotClientsPage]
})
export class BeeBotClientsPageModule {}
