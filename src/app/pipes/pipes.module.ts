import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilesizePipe} from './filesize.pipe';
import {ShortenPipe} from './shorten.pipe';
import {SimpledatePipe} from './simpledate.pipe';


@NgModule({
    declarations: [FilesizePipe, ShortenPipe, SimpledatePipe],
    imports: [
        CommonModule
    ],
    exports: [FilesizePipe, ShortenPipe, SimpledatePipe]
})
export class PipesModule {
}
