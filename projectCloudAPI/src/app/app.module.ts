import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TrendingPageComponent } from './trending-page/trending-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { PlacesPageComponent } from './places-page/places-page.component';
import { CircusmaterialsComponent } from './circusmaterials/circusmaterials.component';

import { AuthService } from './auth/auth.service';
import { ApiService } from './api.service';
import { AuthGuard } from './auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TrendingPageComponent,
    SearchPageComponent,
    PlacesPageComponent,
    CircusmaterialsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthService,
    ApiService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
