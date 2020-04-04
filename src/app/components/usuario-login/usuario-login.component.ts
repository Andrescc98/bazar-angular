import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-login',
  templateUrl: './usuario-login.component.html',
  styleUrls: ['./usuario-login.component.css']
})
export class UsuarioLoginComponent implements OnInit {

  public usuario:Usuario={
    id_usuario:0,
    nombre_usuario:'',
    correo:'',
    telefono:null,
    img_usuario:null,
    contrasena:''
  };

  constructor(
    private usuarioService:UsuarioService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  login(){
    this.usuarioService.login(this.usuario).subscribe(
      res=>{
        localStorage.setItem('token', res.token);
        this.router.navigate(['/usuario/index']);
      },
      err=>console.log(err)
    )
  }
}
