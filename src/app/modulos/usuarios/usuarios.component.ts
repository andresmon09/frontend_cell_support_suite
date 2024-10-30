import { Component } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent {
  
  usuarios: any;
  id_usuario: any;
  obj_usuarios = {
    Identificacion: "",
    nombreus: "",
    celular: "",
    email: "",
    rol: "",
    clave:"",
  }

  validar_nombreus= true;
  validar_celular= true;
  validar_email= true;
  validar_rol= true;
  validar_Identificacion= true;
  validar_clave= true;
  mform = false;
  botones_form = false;


  constructor(private susuarios: UsuariosService){}

  ngOnInit(): void{
    this.consulta();

  }

  consulta(){
    this.susuarios.consultar().subscribe((resultado:any) =>{
    this.usuarios = resultado;
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
    this.obj_usuarios = {
      nombreus: "",
      celular: "",
      email: "",
      rol: "",
      Identificacion: "",
      clave: "",
    }

  }

  validar(funcion: any){
    if(this.obj_usuarios.nombreus == ""){
      this.validar_nombreus=false;
    }
    else{
      this.validar_nombreus=true;
    }
    if(this.obj_usuarios.celular == ""){
      this.validar_celular=false;
    }
    else{
      this.validar_celular=true;
    }
    if(this.obj_usuarios.email == ""){
      this.validar_email=false;
    }
    else{
      this.validar_email=true;
    }
    if(this.obj_usuarios.rol == ""){
      this.validar_rol=false;
    }
    else{
      this.validar_rol=true;
    }
    if(this.obj_usuarios.Identificacion == ""){
      this.validar_Identificacion=false;
    }
    else{
      this.validar_Identificacion=true;
    }
    if(this.obj_usuarios.clave == ""){
      this.validar_clave=false;
    }
    else{
      this.validar_clave=true;
    }

    if(this.validar_nombreus==true && this.validar_celular==true && this.validar_email==true && this.validar_rol==true && this.validar_Identificacion==true && this.validar_clave==true && funcion == 'guardar'){
      this.guardar();
    }

    if(this.validar_nombreus==true && this.validar_celular==true && this.validar_email==true && this.validar_rol==true && this.validar_Identificacion==true && this.validar_clave==true &&  funcion == 'editar'){
      this.editar();
    }
  }

  guardar(){
    this.susuarios.insertar(this.obj_usuarios).subscribe((datos:any) => {
      if(datos['resultado']=='OK'){
        this.consulta();
      }
    });
    this.limpiar();
    this.mostrar_form('no ver');
  }
  
  eliminar(id:number){
    console.log();
    this.susuarios.eliminar(id).subscribe((datos:any) =>{
      if(datos['resultado']=='OK'){
        this.consulta();
      }
    })

  }

  cargar_datos(items: any, id: number){

    this.obj_usuarios = {
      nombreus: items.nombreus,
      celular: items.celular,
      email: items.email,
      rol: items.rol,
      Identificacion: items.Identificacion,
      clave: items.clave
    }
    this.id_usuario = id;

    this.botones_form = true;
    this.mostrar_form('ver');

  }

  editar(){
    this.susuarios.editar(this.id_usuario, this.obj_usuarios).subscribe((datos:any) =>{
      if(datos['resultado']=="OK") {
        this.consulta();
      }
    });
    this.limpiar();
    this.mostrar_form('no ver');
  }

}
