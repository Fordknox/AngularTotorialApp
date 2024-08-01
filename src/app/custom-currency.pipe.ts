import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCurrency'
})
export class CustomCurrencyPipe implements PipeTransform {
  transform(value: number, currencySymbol: string = 'R'): string {
    if (value == null) return '';
    return `${currencySymbol}${value.toFixed(2)}`;
  }
}
