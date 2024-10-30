import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavComponent } from './estructura/nav/nav.component';
import { AsideComponent } from './estructura/aside/aside.component';
import { ContentComponent } from './estructura/content/content.component';
import { FooterComponent } from './estructura/footer/footer.component';
import { PrincipalComponent } from './estructura/principal.component';
import { DashboardComponent } from './modulos/dashboard/dashboard.component';
import { CategoriasComponent } from './modulos/categorias/categorias.component';
import { ProductosComponent } from './modulos/productos/productos.component';
import { ClientesComponent } from './modulos/clientes/clientes.component';
import { TicketsComponent } from './modulos/tickets/tickets.component';
import { UsuariosComponent } from './modulos/usuarios/usuarios.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './modulos/login/login.component';
import { NoEncontroComponent } from './modulos/no-encontro/no-encontro.component';
import { InsertarticketComponent } from './modulos/insertarticket/insertarticket.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AsideComponent,
    ContentComponent,
    FooterComponent,
    PrincipalComponent,
    DashboardComponent,
    CategoriasComponent,
    ProductosComponent,
    ClientesComponent,
    TicketsComponent,
    UsuariosComponent,
    LoginComponent,
    NoEncontroComponent,
    InsertarticketComponent,
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
