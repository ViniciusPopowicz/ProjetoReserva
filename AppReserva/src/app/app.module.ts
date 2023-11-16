import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReservasService } from './reservas.service';
import { PremiosService } from './premios.service';
import { ClientesService } from './clientes.service';
import { ReservasComponent } from './components/reservas/reservas.component';
import { PremiosComponent } from './components/premios/premios.component';
import { ClientesComponent } from './components/clientes/clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    ReservasComponent,
    PremiosComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  providers: [HttpClientModule, PremiosService, ReservasService, ClientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }