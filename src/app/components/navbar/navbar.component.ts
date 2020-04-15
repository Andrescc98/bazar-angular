import { Component, OnInit } from '@angular/core';

import { UsuarioService } from "../../services/usuario.service";
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public usuario:Usuario={
    id_usuario:null,
    nombre_usuario:null,
    correo:null,
    img_usuario:null,
    telefono:null
  };

  constructor(
    private usuarioService:UsuarioService,
    private router:Router
  ) {
    if(this.loggedIn()){
      this.usuarioService.getOneUserLogin().subscribe(
        res=>{
          this.usuario=res[0]
        },
        err=>console.log(err)
      )
    }else{
      this.usuario=null;
    }
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
  userLogin(){
      this.usuarioService.getOneUserLogin().subscribe(
        res=>console.log(res),
        err=>console.log(err)
      )    
  }
}
