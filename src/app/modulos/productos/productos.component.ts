import { Component } from '@angular/core';
import { CategoriasService } from 'src/app/servicios/categorias.service';
import { ProductosService } from 'src/app/servicios/productos.service';
import { ProveedorService } from 'src/app/servicios/proveedor.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent {

  productos: any;
  categorias: any;
  proveedor: any;
  id_producto: any;
  obj_productos = {
    nombre: "",
    descripcion: "",
    precio: 0,
    stock: 0,
    fo_categorias: 0,
    fo_proveedor: 0
  }

  validar_nombre= true;
  validar_descripcion= true;
  validar_precio= true;
  validar_stock= true;
  validar_categorias= true;
  validar_proveedor= true;
  mform = false;
  botones_form = false;


  constructor(private sproductos:ProductosService, private scate:CategoriasService, private sprov:ProveedorService){}

  ngOnInit(): void{
    this.consulta();
    this.consulta_c();
    this.consulta_pr();

  }

  consulta(){
    this.sproductos.consultar().subscribe((resultado:any) =>{
    this.productos = resultado;
    })
  }
  consulta_c(){
    this.scate.consultar().subscribe((resultado:any) =>{
    this.categorias = resultado;
    })
  }

  consulta_pr() {
    this.sprov.consultar().subscribe((resultado: any) => {
      this.proveedor = resultado;
    });
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
    this.obj_productos = {
      nombre: "",
      descripcion: "",
      precio: 0,
      stock: 0,
      fo_categorias: 0,
      fo_proveedor: 0
    }

  }

  validar(funcion: any){
    if(this.obj_productos.nombre == ""){
      this.validar_nombre=false;
    }
    else{
      this.validar_nombre=true;
    }
    if(this.obj_productos.descripcion == ""){
      this.validar_descripcion=false;
    }
    else{
      this.validar_descripcion=true;
    }
    if(this.obj_productos.precio == 0){
      this.validar_precio=false;
    }
    else{
      this.validar_precio=true;
    }
    if(this.obj_productos.stock == 0){
      this.validar_stock=false;
    }
    else{
      this.validar_stock=true;
    }
    if(this.obj_productos.fo_categorias == 0){
      this.validar_categorias=false;
    }
    else{
      this.validar_categorias=true;
    }
    if(this.obj_productos.fo_proveedor == 0){
      this.validar_proveedor=false;
    }
    else{
      this.validar_proveedor=true;
    }

    if(this.validar_nombre==true && this.validar_descripcion==true && this.validar_precio==true && this.validar_stock==true && this.validar_categorias==true && this.validar_proveedor==true && funcion == 'guardar'){
      this.guardar();
    }

    if(this.validar_nombre==true && this.validar_descripcion==true && this.validar_precio==true && this.validar_stock==true && this.validar_categorias==true && this.validar_proveedor==true && funcion == 'editar'){
      this.editar();
    }
  }

  guardar(){
    this.sproductos.insertar(this.obj_productos).subscribe((datos:any) => {
      if(datos['resultado']=='OK'){
        this.consulta();
      }
    });
    this.limpiar();
    this.mostrar_form('no ver');
  }
  
  eliminar(id:number){
    console.log();
    this.sproductos.eliminar(id).subscribe((datos:any) =>{
      if(datos['resultado']=='OK'){
        this.consulta();
      }
    })

  }

  cargar_datos(items: any, id: number){

    this.obj_productos = {
      nombre: items.nombre,
      descripcion: items.descripcion,
      precio: items.precio,
      stock: items.stock,
      fo_categorias: items.fo_categorias,
      fo_proveedor: items.fo_proveedor
    }
    this.id_producto = id;

    this.botones_form = true;
    this.mostrar_form('ver');

  }

  editar(){
    this.sproductos.editar(this.id_producto, this.obj_productos).subscribe((datos:any) =>{
      if(datos['resultado']=="OK") {
        this.consulta();
      }
    });
    this.limpiar();
    this.mostrar_form('no ver');
  }

}
