import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServerStatsPageRoutingModule } from './server-stats-routing.module';

import { ServerStatsPage } from './server-stats.page';
import {PipesModule} from '../../pipes/pipes.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ServerStatsPageRoutingModule,
        PipesModule
    ],
  declarations: [ServerStatsPage]
})
export class ServerStatsPageModule {}
