import { Component } from '@angular/core';
import { CategoriasService } from 'src/app/servicios/categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent {

  categorias: any;

  constructor(private scate:CategoriasService){}

  ngOnInit(): void{
    this.consulta();

  }

  consulta(){
    this.scate.consultar().subscribe((resultado:any) =>{
    this.categorias = resultado;
    })
  }

}
