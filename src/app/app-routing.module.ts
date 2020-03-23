import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { AltasComponent } from './components/altas/altas.component';
//import { AltasarticulosComponent } from './components/articulos/altasarticulos/altasarticulos.component';
import { EditarComponent } from './components/editar/editar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ClienteComponent } from './components/cliente/cliente.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [ AuthGuard ] },
  { path: 'proveedores', component: ProveedoresComponent, canActivate: [ AuthGuard ] },
  { path: 'articulos', component: ArticulosComponent, canActivate: [ AuthGuard ] }, 
  { path: 'articulos/altas', component: AltasComponent},
  { path: 'articulos/editar/:codigo', component: EditarComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'clientes', component: ClientesComponent,  canActivate: [ AuthGuard ]},
  { path: 'cliente/:codigo', component: ClienteComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
