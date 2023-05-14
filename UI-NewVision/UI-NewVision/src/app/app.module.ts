import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PrimeNgModule } from './prime-ng.module';
import { OrdersModule } from './orders/orders.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [PrimeNgModule, BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
