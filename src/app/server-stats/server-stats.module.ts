import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServerStatsPageRoutingModule } from './server-stats-routing.module';

import { ServerStatsPage } from './server-stats.page';
import {ServicesModule} from '../services/services.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ServerStatsPageRoutingModule,
        ServicesModule
    ],
  declarations: [ServerStatsPage]
})
export class ServerStatsPageModule {}
