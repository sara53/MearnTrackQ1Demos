import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'squareprice',
})
export class SquarepricePipe implements PipeTransform {
  transform(value: number, ...args: number[]): unknown {
    return value * args[0];
  }
}
