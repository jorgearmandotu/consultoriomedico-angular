import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitasComponent } from './components/citas/citas.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ModificacionCitasComponent } from './components/modificacion-citas/modificacion-citas.component';
import { BuscarCitasComponent } from './components/buscar-citas/buscar-citas.component';

@NgModule({
  declarations: [
    AppComponent,
    CitasComponent,
    NavbarComponent,
    ModificacionCitasComponent,
    BuscarCitasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
