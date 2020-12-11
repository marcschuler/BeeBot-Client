import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filesize'
})
export class FilesizePipe implements PipeTransform {

  transform(size: number, ...args: unknown[]): unknown {
    const UNITS = ['B', 'KB', 'MB', 'GB', 'TB'];
    for (let n = 0; n < UNITS.length; ++n){
      if (size <= 1024) {
        return Math.round(size * 100) / 100 + UNITS[n];
      }
      size /= 1024;
    }
    return null;
  }

}
