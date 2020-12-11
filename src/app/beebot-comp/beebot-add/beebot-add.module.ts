import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeebotAddPageRoutingModule } from './beebot-add-routing.module';

import { BeebotAddPage } from './beebot-add.page';
import {BeebotCompModule} from '../beebot-comp.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        BeebotAddPageRoutingModule,
        BeebotCompModule
    ],
  declarations: [BeebotAddPage]
})
export class BeebotAddPageModule {}
