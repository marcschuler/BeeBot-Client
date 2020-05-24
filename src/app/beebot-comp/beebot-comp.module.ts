import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CompGenericComponent} from "./comp-generic/comp-generic.component";
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";
import {AppModule} from "../app.module";


@NgModule({
    declarations: [CompGenericComponent],
    imports: [
        CommonModule,
        IonicModule,
        FormsModule
    ],
    exports: [CompGenericComponent]
})
export class BeebotCompModule {
}
