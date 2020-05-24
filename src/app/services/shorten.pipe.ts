import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

    transform(value: string, num = 5): unknown {
        if (value.length <= num)
            return value;
        return value.substring(0, 5);
    }

}
