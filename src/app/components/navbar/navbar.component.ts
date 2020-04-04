import { Component, OnInit } from '@angular/core';

import { UsuarioService } from "../../services/usuario.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(
    private usuarioService:UsuarioService,
    private router:Router
  ) { 
  }

  ngOnInit(): void {
  }

  loggedIn(){
    return this.usuarioService.loggedIn();
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
