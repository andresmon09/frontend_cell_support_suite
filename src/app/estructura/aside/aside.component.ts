import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

declare var $: any; // Necesario para utilizar jQuery si AdminLTE se basa en él.

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit, AfterViewInit {
  nombreus: any;
  rol: any;

  constructor(private router: Router) {
    // Detecta cada cambio de ruta para colapsar el menú automáticamente
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.collapseMenu();
      }
    });
  }

  ngOnInit(): void {
    this.nombreus = sessionStorage.getItem('nombreus');
    this.rol = sessionStorage.getItem('rol');
  }

  ngAfterViewInit(): void {
    // Colapsa el menú al cargar el componente
    this.collapseMenu();
  }

  collapseMenu(): void {
    // Colapsa el menú usando AdminLTE
    $('body').addClass('sidebar-collapse sidebar-closed');
    if (window.innerWidth < 768) {
      // En móvil, asegura que el menú esté cerrado
      $('body').removeClass('sidebar-open');
    }
  }
}
