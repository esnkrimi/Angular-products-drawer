import { NgModule } from '@angular/core';
import { ProductsDrawerComponent } from './products-drawer.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    ProductsDrawerComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule
  ],
  exports: [
    ProductsDrawerComponent
  ]
})
export class ProductsDrawerModule { }
