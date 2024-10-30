import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TicketsService } from 'src/app/servicios/tickets.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent {

  tickets: any;
  modal = false;
  productos: any;
  total: any;

  constructor(private router:Router, private stickets: TicketsService){}

  ngOnInit(): void{
    this.consulta();

  }

  consulta(){
    this.stickets.consultar().subscribe((result:any)=>{
      this.tickets = result;
    })
  }

  consultap(id:number){
    this.stickets.consultarp(id).subscribe((result:any)=>{
      this.productos = result;
      this.total=0;
      for(let i=0; i<this.productos.length; i++){
        this.total = this.total + this.productos[i][3];

      }
    })
  }

  insertar(){
    this.router.navigate(['insertarticket']);
  }

  mostrar_modal(dato:any, id:number){
    switch(dato){
      case 0:
        this.modal = false;
      break;
      case 1:
        this.modal = true;
        this.consultap(id);
      break;   
    }
  }

  eliminar(id: number) {
    if (confirm('¿Estás seguro de que deseas eliminar este ticket?')) {
      this.stickets.eliminar(id).subscribe(() => {

        this.consulta();
      });
    }
  }
}
