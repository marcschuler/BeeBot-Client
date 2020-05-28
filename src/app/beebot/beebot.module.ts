import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeebotPageRoutingModule } from './beebot-routing.module';

import { BeebotPage } from './beebot.page';
import {ModuleInfoComponent} from "../beebot-comp/module-info/module-info.component";
import {BeebotCompModule} from "../beebot-comp/beebot-comp.module";

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
