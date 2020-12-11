import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModulesPageRoutingModule } from './modules-routing.module';

import { ModulesPage } from './modules.page';
import {BeebotCompModule} from '../beebot-comp.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ModulesPageRoutingModule,
        BeebotCompModule
    ],
  declarations: [ModulesPage]
})
export class ModulesPageModule {}
