import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { HomeComponent } from './components/home/home.component';

import { ProveedoresService } from '../app/services/proveedores.service';
import { AltasComponent } from './components/altas/altas.component';
import { ModalAltaComponent } from './components/modal-alta/modal-alta.component';
import { ModalEditarComponent } from './components/modal-editar/modal-editar.component';
import { EditarComponent } from './components/editar/editar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProveedoresComponent,
    ArticulosComponent,
    HomeComponent,
    AltasComponent,
    ModalAltaComponent,
    ModalEditarComponent,
    EditarComponent,
    LoginComponent,
    RegisterComponent,
    ClientesComponent,
    ClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    ProveedoresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
