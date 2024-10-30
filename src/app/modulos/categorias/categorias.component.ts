import { Component } from '@angular/core';
import { CategoriasService } from 'src/app/servicios/categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent {

  categorias: any;
  id_catergorias: any;
  obj_categorias ={
     nombre: "",
  }

  validar_nombre= true;
  mform = false;
  botones_form = false;

  constructor(private scate:CategoriasService){}

  ngOnInit(): void{
    this.consulta();

  }

  consulta(){
    this.scate.consultar().subscribe((resultado:any) =>{
    this.categorias = resultado;
    })
  }  

  mostrar_form(dato: any){
    switch(dato){
      case "ver":
        this.mform = true;
      break;
      case "no ver":
        this.mform = false;
        this.botones_form = false;
      break;    
    }
  }


  limpiar(){
    this.obj_categorias = {
      nombre: "",
    }
  }  

  validar(funcion: any){
    if(this.obj_categorias.nombre == ""){
      this.validar_nombre=false;
    }
    else{
      this.validar_nombre=true;
    }
     if(this.validar_nombre==true && funcion == 'guardar'){
      this.guardar();
    }

    if(this.validar_nombre==true &&  funcion == 'editar'){
      this.editar();
    }
  }

    guardar(){
      this.scate.insertar(this.obj_categorias).subscribe((datos:any) => {
        if(datos['resultado']=='OK'){
          this.consulta();
        }
      });
      this.limpiar();
      this.mostrar_form('no ver');
    }

    eliminar(id:number){
      console.log();
      this.scate.eliminar(id).subscribe((datos:any) =>{
        if(datos['resultado']=='OK'){
          this.consulta();
        }
      })
  
    }
      cargar_datos(items: any, id: number){

        this.obj_categorias = {
          nombre: items.nombre,
        }
        this.id_catergorias = id;
    
        this.botones_form = true;
        this.mostrar_form('ver');
      }

    editar(){
      this.scate.editar(this.id_catergorias, this.obj_categorias).subscribe((datos:any) =>{
        if(datos['resultado']=="OK") {
          this.consulta();
        }
      });
      this.limpiar();
      this.mostrar_form('no ver');
    }

}
