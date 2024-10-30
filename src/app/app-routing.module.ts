import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './estructura/principal.component';
import { DashboardComponent } from './modulos/dashboard/dashboard.component';
import { CategoriasComponent } from './modulos/categorias/categorias.component';
import { ClientesComponent } from './modulos/clientes/clientes.component';
import { ProductosComponent } from './modulos/productos/productos.component';
import { TicketsComponent } from './modulos/tickets/tickets.component';
import { UsuariosComponent } from './modulos/usuarios/usuarios.component';
import { LoginComponent } from './modulos/login/login.component';
import { NoEncontroComponent } from './modulos/no-encontro/no-encontro.component';
import { validaruserGuard } from './guard/validaruser.guard';
import { InsertarticketComponent } from './modulos/insertarticket/insertarticket.component';

const routes: Routes = [
  {
    path: '', component: PrincipalComponent,
    children:
    [
      {path: 'dashboard', component: DashboardComponent, canActivate: [validaruserGuard]},
      {path: 'categorias', component: CategoriasComponent, canActivate: [validaruserGuard]},
      {path: 'clientes', component: ClientesComponent, canActivate: [validaruserGuard]},
      {path: 'productos', component: ProductosComponent, canActivate: [validaruserGuard]},
      {path: 'tickets', component: TicketsComponent, canActivate: [validaruserGuard]},
      {path: 'insertarticket', component: InsertarticketComponent, canActivate: [validaruserGuard]},
      {path: 'usuarios', component: UsuariosComponent, canActivate: [validaruserGuard]},
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
    ]
  },
  
  {path: 'login', component: LoginComponent},
  {path: '**', component: NoEncontroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
