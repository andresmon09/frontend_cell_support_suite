import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/servicios/clientes.service';
import { ProductosService } from 'src/app/servicios/productos.service';
import { TicketsService } from 'src/app/servicios/tickets.service';

@Component({
  selector: 'app-insertarticket',
  templateUrl: './insertarticket.component.html',
  styleUrls: ['./insertarticket.component.scss']
})
export class InsertarticketComponent {
  productos: any;
  clientes: any;
  identificacion_cliente = "";
  nombre_cliente = "";
  matriz_productos: any = [];
  arreglo_productos: any = [];
  total: any = 0;
  mostrarMensaje = false;  // Variable para controlar el mensaje
  tickets = {
    fecha: "",
    fo_cliente: 0,
    productos: [],
    subtotal: 0,
    total: 0
  };

  constructor(private router: Router, private sproductos: ProductosService, private sclientes: ClientesService, private stickets: TicketsService) { }

  ngOnInit(): void {
    this.consulta_productos();
  }

  consulta_productos() {
    this.sproductos.consultar().subscribe((result: any) => {
      this.productos = result;
    });
  }

  consulta_cliente() {
    if (!this.identificacion_cliente.trim()) {
      this.nombre_cliente = "";
      return;
    }
  
    this.sclientes.ccliente(this.identificacion_cliente).subscribe((result: any) => {
      this.clientes = result;
      this.nombre_cliente = this.clientes[0]?.nombre || "";
    });
  }

  seleccionar(valores: any, id: number) {
    const cantidad = Number(prompt("Ingrese la cantidad a llevar"));
    if (!cantidad || cantidad <= 0) {
      return;
    }
  
    this.arreglo_productos = [valores.nombre, Number(valores.precio), cantidad, cantidad * Number(valores.precio)];
    this.matriz_productos.push(this.arreglo_productos);
    this.total = this.matriz_productos.reduce((acc: number, item: any) => acc + item[3], 0);
  }

  eliminarProducto(index: number) {
    this.matriz_productos.splice(index, 1);
    this.total = this.matriz_productos.reduce((acc: number, item: any) => acc + (item[3] || 0), 0);
  }

  guardar() {
    // Verificar si la identificación del cliente está vacía
    if (!this.identificacion_cliente.trim()) {
      this.mostrarMensaje = true;  // Mostrar el mensaje si no hay identificación
      return;
    }

    // Si hay identificación, ocultar el mensaje
    this.mostrarMensaje = false;

    let fecha = new Date();
    this.tickets.fecha = `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()}-${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;
    this.tickets.fo_cliente = Number(this.clientes[0].id_cliente);
    this.tickets.productos = this.matriz_productos;
    this.tickets.subtotal = this.total;
    this.tickets.total = this.total;

    this.stickets.insertar(this.tickets).subscribe((datos: any) => {
      if (datos['resultado'] == 'OK') {
        console.log(datos['resultado']);
        this.router.navigate(['tickets']);
      }
    });
  }

  anularPedido() {
    this.router.navigate(['tickets']);
  }
}
