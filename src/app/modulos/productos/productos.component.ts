import { Component } from '@angular/core';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent {

  productos: any;

  constructor(private sproductos:ProductosService){}

  ngOnInit(): void{
    this.consulta();

  }

  consulta(){
    this.sproductos.consultar().subscribe((resultado:any) =>{
    this.productos = resultado;
    })
  }

}
