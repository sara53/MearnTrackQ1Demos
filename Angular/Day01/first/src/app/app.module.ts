import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../app/components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/myfolder/footer.component';
import { SliderComponent } from './components/slider/slider.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductItemComponent } from './components/products/product-item/product-item.component';
@NgModule({
  declarations: [AppComponent, HeaderComponent, ContentComponent, FooterComponent, SliderComponent, ProductsComponent, ProductItemComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
