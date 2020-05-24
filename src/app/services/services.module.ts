import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilesizePipe } from './filesize.pipe';
import { ShortenPipe } from './shorten.pipe';



@NgModule({
  declarations: [FilesizePipe, ShortenPipe],
  imports: [
    CommonModule
  ],
    exports: [
        FilesizePipe,
        ShortenPipe
    ]
})
export class ServicesModule { }
