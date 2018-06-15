import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './globals/header/header.component';
import { MenuComponent } from './globals/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { CanastaComponent } from './globals/canasta/canasta.component';
import {appRouter} from './routing';
import { CategoriaComponent } from './pages/categoria/categoria.component'; //se indica la ruta de la constante con los condicionales

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    HomeComponent,
    CanastaComponent,
    CategoriaComponent
  ],
  imports: [
    BrowserModule,
    appRouter
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
