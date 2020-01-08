import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { MapComponent } from './maps/maps.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyA0sJ_8wra4tuVr6KjUVNkeCMAvVkmwY58' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
