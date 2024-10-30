import { Component } from '@angular/core';
import { ClientesService } from 'src/app/servicios/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent {

  clientes: any;
  id_cliente: any;
  obj_clientes = {
    nombre: "",
    correo: "",
    direccion: "",
    celular: "",
    identificacion: "",
  }

  validar_nombre= true;
  validar_correo= true;
  validar_direccion= true;
  validar_celular= true;
  validar_identificacion= true;
  mform = false;
  botones_form = false;


  constructor(private sclientes: ClientesService){}

  ngOnInit(): void{
    this.consulta();

  }

  consulta(){
    this.sclientes.consultar().subscribe((resultado:any) =>{
    this.clientes = resultado;
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
    this.obj_clientes = {
      nombre: "",
      correo: "",
      direccion: "",
      celular: "",
      identificacion: "",
    }

  }

  validar(funcion: any){
    if(this.obj_clientes.nombre == ""){
      this.validar_nombre=false;
    }
    else{
      this.validar_nombre=true;
    }
    if(this.obj_clientes.correo == ""){
      this.validar_correo=false;
    }
    else{
      this.validar_correo=true;
    }
    if(this.obj_clientes.direccion == ""){
      this.validar_direccion=false;
    }
    else{
      this.validar_direccion=true;
    }
    if(this.obj_clientes.celular == ""){
      this.validar_celular=false;
    }
    else{
      this.validar_celular=true;
    }
    if(this.obj_clientes.identificacion == ""){
      this.validar_identificacion=false;
    }
    else{
      this.validar_identificacion=true;
    }

    if(this.validar_nombre==true && this.validar_correo==true && this.validar_direccion==true && this.validar_celular==true && this.validar_identificacion==true && funcion == 'guardar'){
      this.guardar();
    }

    if(this.validar_nombre==true && this.validar_correo==true && this.validar_direccion==true && this.validar_celular==true && this.validar_identificacion==true && funcion == 'editar'){
      this.editar();
    }
  }

  guardar(){
    this.sclientes.insertar(this.obj_clientes).subscribe((datos:any) => {
      if(datos['resultado']=='OK'){
        this.consulta();
      }
    });
    this.limpiar();
    this.mostrar_form('no ver');
  }
  
  eliminar(id:number){
    console.log();
    this.sclientes.eliminar(id).subscribe((datos:any) =>{
      if(datos['resultado']=='OK'){
        this.consulta();
      }
    })

  }

  cargar_datos(items: any, id: number){

    this.obj_clientes = {
      nombre: items.nombre,
      correo: items.correo,
      direccion: items.direccion,
      celular: items.celular,
      identificacion: items.identificacion
    }
    this.id_cliente = id;

    this.botones_form = true;
    this.mostrar_form('ver');

  }

  editar(){
    this.sclientes.editar(this.id_cliente, this.obj_clientes).subscribe((datos:any) =>{
      if(datos['resultado']=="OK") {
        this.consulta();
      }
    });
    this.limpiar();
    this.mostrar_form('no ver');
  }

}

