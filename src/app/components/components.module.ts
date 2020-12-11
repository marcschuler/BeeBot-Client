import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BotListComponent} from './bot-list/bot-list.component';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {PipesModule} from '../pipes/pipes.module';


@NgModule({
    declarations: [BotListComponent],
    imports: [
        CommonModule,
        IonicModule,
        RouterModule,
        PipesModule
    ],
    exports: [BotListComponent]
})
export class ComponentsModule {
}
