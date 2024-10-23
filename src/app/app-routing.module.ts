import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './estructura/principal.component';
import { DashboardComponent } from './modulos/dashboard/dashboard.component';
import { CategoriasComponent } from './modulos/categorias/categorias.component';
import { ClientesComponent } from './modulos/clientes/clientes.component';
import { ProductosComponent } from './modulos/productos/productos.component';
import { TicketsComponent } from './modulos/tickets/tickets.component';
import { UsuariosComponent } from './modulos/usuarios/usuarios.component';

const routes: Routes = [
  {
    path: '', component: PrincipalComponent,
    children:
    [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'categorias', component: CategoriasComponent },
      {path: 'clientes', component: ClientesComponent },
      {path: 'productos', component: ProductosComponent },
      {path: 'tickets', component: TicketsComponent },
      {path: 'usuarios', component: UsuariosComponent },
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
