import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchPageComponent } from './search-page/search-page.component';
import { TrendingPageComponent } from './trending-page/trending-page.component';
import { PlacesPageComponent } from './places-page/places-page.component';

const routes: Routes = [
  {path: "search", component: SearchPageComponent},
  {path: "trending", component: TrendingPageComponent},
  {path: "places", component: PlacesPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
