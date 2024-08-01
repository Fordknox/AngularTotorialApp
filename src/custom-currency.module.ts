import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCurrencyPipe } from './app/custom-currency.pipe';

@NgModule({
  declarations: [CustomCurrencyPipe],
  imports: [CommonModule],
  exports: [CustomCurrencyPipe]  // Export the pipe so it can be used in other modules
})
export class CustomCurrencyModule {}
