import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CompGenericComponent} from './comp-generic/comp-generic.component';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {AppModule} from '../app.module';
import {ViolationComponent} from './violation/violation.component';
import {LogsComponent} from './logs/logs.component';
import {PipesModule} from '../pipes/pipes.module';


@NgModule({
    declarations: [CompGenericComponent, ViolationComponent, LogsComponent],
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
        PipesModule
    ],
    exports: [CompGenericComponent, ViolationComponent, LogsComponent]
})
export class BeebotCompModule {
}
