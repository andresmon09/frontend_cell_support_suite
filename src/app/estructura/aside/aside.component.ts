import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent {

  nombreus: any;
  rol: any;
  isCollapsed = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.nombreus = sessionStorage.getItem('nombreus');
    this.rol = sessionStorage.getItem('rol');
    this.toggleBodyClass();
  }

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
    this.toggleBodyClass();
  }

  toggleBodyClass() {
    if (this.isCollapsed) {
      document.body.classList.add('sidebar-collapse');
    } else {
      document.body.classList.remove('sidebar-collapse');
    }
  }
}
