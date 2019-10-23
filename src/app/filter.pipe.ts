import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (!value) {
      return [];
    } else if (args.length < 1 || args[0].trim().length < 1) {
      return value;
    }
    const needle = args[0].toLowerCase();
    return value.filter(v => v.message.toLowerCase().includes(needle));
  }

}
