import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeebotPageRoutingModule } from './beebot-routing.module';

import { BeebotPage } from './beebot.page';
import {ModuleInfoComponent} from '../../components-server/module-info/module-info.component';
import {BeebotCompModule} from '../../components-server/beebot-comp.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        BeebotPageRoutingModule,
        BeebotCompModule
    ],
    declarations: [BeebotPage, ModuleInfoComponent]
})
export class BeebotPageModule {}
