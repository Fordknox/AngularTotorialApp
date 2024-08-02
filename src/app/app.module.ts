import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ShippingComponent } from './shipping/shipping.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from "./navbar/navbar.component";
import { allIcons } from 'angular-feather/icons';
import { FeatherModule } from 'angular-feather';
import { CustomCurrencyModule } from '../custom-currency.module';

@NgModule({
  imports: [
    BrowserModule,
    CustomCurrencyModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
        { path: '', component: ProductListComponent },
        { path: 'products/:productId', component: ProductDetailsComponent },
        { path: 'cart', component: CartComponent },
        { path: 'shipping', component: ShippingComponent },
    ]),
    AppRoutingModule,
    FeatherModule.pick(allIcons),

],
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    HomeComponent,
    NavbarComponent,
   
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/