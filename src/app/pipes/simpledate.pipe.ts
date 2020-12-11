import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'simpledate'
})
export class SimpledatePipe implements PipeTransform {

    transform(value: any): unknown {
        const date: Date = new Date(Date.parse(value));
        const today: boolean = this.isToday(date);
        if (today) {
            return date.toLocaleTimeString();
        }
        return date.toLocaleString();
    }

    // See: https://flaviocopes.com/how-to-determine-date-is-today-javascript/
    private isToday(date: Date) {
        const today = new Date();
        return date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear();
    }


}
