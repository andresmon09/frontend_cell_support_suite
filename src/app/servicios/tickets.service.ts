import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  url = 'http://localhost/cell_support_suite/backend/controlador/tickets.php';

  constructor(private http: HttpClient) { }

  consultar() {
    return this.http.get(`${this.url}?control=consulta`);
  }

  consultarp(id:number) {
    return this.http.get(`${this.url}?control=productos&id=${id}`);
  }
 
  eliminar(id:number){
    return this.http.get(`${this.url}?control=eliminar&id=${id}`);
  }

  insertar(params:any){
    console.log(params);
    return this.http.post(`${this.url}?control=insertar` , JSON.stringify(params));
  }

  editar(id:number, params:any){
    return this.http.post(`${this.url}?control=editar&id=${id}` , JSON.stringify(params));
  }

  filtro(dato:any){
    return this.http.get(`${this.url}?control=filtro&dato=${dato}`);
  }

}