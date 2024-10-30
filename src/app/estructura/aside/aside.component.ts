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

  constructor(private router:Router){}

  ngOnInit(): void {
    this.nombreus = sessionStorage.getItem('nombreus');
    this.rol = sessionStorage.getItem('rol');
  }
}

