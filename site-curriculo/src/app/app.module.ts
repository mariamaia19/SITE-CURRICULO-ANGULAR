import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HEADERComponent } from './header/header.component';
import { FOOTERRComponent } from './footerr/footerr.component';
import { HomeComponent } from './corpo/home/home.component';
import { QuemsomosComponent } from './corpo/quemsomos/quemsomos.component';
import { ProjetosComponent } from './corpo/projetos/projetos.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HEADERComponent,
    FOOTERRComponent,
    HomeComponent,
    QuemsomosComponent,
    ProjetosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatExpansionModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
