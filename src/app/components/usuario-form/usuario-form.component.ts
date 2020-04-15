import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { UsuarioService } from "../../services/usuario.service";
import { Usuario } from "../../models/usuario";

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  public usuario:Usuario={
    id_usuario:0,
    nombre_usuario:'',
    correo:'',
    telefono:null,
    img_usuario:null,
    contrasena:''
  };
  public load:boolean=false;
  public mensaje:string=null;
  public imgPath:any=null;

  constructor(
    private usuarioService:UsuarioService,
    private router:Router
    ) { }

  ngOnInit(): void {
  }

  cerrarMensaje(){
    this.mensaje=null;
  }

  registrar(event:any){
    this.load=true;
    const formdata=new FormData(event.currentTarget);
    this.usuarioService.add(formdata).subscribe(
      res=>{
        this.load=false;
        this.router.navigate(['/']);
      },
      err=>{
        this.load=false;
        this.mensaje=err.error;
      }
    )
  }

  mostrarImagen(event:any){
     this.imgPath=event.target.value.split('\\');
     this.imgPath=this.imgPath[this.imgPath.length-1];
  }

}
