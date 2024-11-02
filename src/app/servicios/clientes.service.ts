import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {


  url = 'https://cellsuite.website/backend/controlador/clientes.php';

  constructor(private http: HttpClient) { }

  consultar(){
    return this.http.get(`${this.url}?control=consulta`);
  }
  
  eliminar(id:number){
    return this.http.get(`${this.url}?control=eliminar&id=${id}`);
  }

  insertar(params:any){
    return this.http.post(`${this.url}?control=insertar` , JSON.stringify(params));
  }

  editar(id:number, params:any){
    return this.http.post(`${this.url}?control=editar&id=${id}` , JSON.stringify(params));
  }


  filtro(valor:any){
    return this.http.get(`${this.url}?control=filtro&valor=${valor}`);
  }
  
  ccliente(valor:any){
    return this.http.get(`${this.url}?control=ccliente&valor=${valor}`);
  }

}