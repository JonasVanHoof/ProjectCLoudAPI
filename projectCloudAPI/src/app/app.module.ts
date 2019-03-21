import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TrendingPageComponent } from './trending-page/trending-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { PlacesPageComponent } from './places-page/places-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TrendingPageComponent,
    SearchPageComponent,
    PlacesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
