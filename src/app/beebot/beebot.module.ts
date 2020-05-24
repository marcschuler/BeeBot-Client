import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeebotPageRoutingModule } from './beebot-routing.module';

import { BeebotPage } from './beebot.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeebotPageRoutingModule
  ],
  declarations: [BeebotPage]
})
export class BeebotPageModule {}
