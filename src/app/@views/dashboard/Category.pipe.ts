import {Pipe, PipeTransform} from '@angular/core';
 
@Pipe({name: 'customfilter'})
export class CategoryPipe implements PipeTransform {
  transform(value: any, input: string) {
    if (input) {
        input = input.toLowerCase();
        return value.filter(function (el: any) {
            return el.patientName.toLowerCase().indexOf(input) > -1;
        })
    }
    return value;
}
}