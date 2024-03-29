import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ArtistComponent } from './components/artist/artist.component';
import { HttpClientModule } from '@angular/common/http';
import { NoimagePipe } from './pipes/noimage.pipe';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { TarjetasComponent } from './components/shared/tarjetas/tarjetas.component';
import { ErrorComponent } from './components/shared/error/error.component';

@NgModule( {
  declarations: [
    AppComponent,
    HomeComponent,
    ArtistComponent,
    SearchComponent,
    NavbarComponent,
    NoimagePipe,
    DomseguroPipe,
    ErrorComponent,
    TarjetasComponent,
    LoadingComponent,
    ErrorComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
} )
export class AppModule { }
