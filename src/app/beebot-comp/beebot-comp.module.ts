import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CompGenericComponent} from "./comp-generic/comp-generic.component";
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";
import {AppModule} from "../app.module";
import {ViolationComponent} from "./violation/violation.component";


@NgModule({
    declarations: [CompGenericComponent, ViolationComponent],
    imports: [
        CommonModule,
        IonicModule,
        FormsModule
    ],
    exports: [CompGenericComponent, ViolationComponent]
})
export class BeebotCompModule {
}
