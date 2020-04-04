import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from "@angular/router";

import { UsuarioService } from "../services/usuario.service";

@Injectable({
  providedIn: 'root'
})
export class UsuarioGuard implements CanActivate {

  constructor(
    private usuarioService:UsuarioService,
    private router:Router
  ){}

  canActivate():boolean{
    if(this.usuarioService.loggedIn()){
      return true;
    }
    this.router.navigate(['/usuario/login']);
    return false;
  
  }
  
  
}
