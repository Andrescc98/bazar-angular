import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { ProductoService } from "../../services/producto.service";
import { UsuarioService } from "../../services/usuario.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public param:number;
  public producto:any={};
  public usuario:any={};

  constructor(
    private activatedRoute:ActivatedRoute,
    private productoService:ProductoService,
    private usuarioService:UsuarioService
    ) { }

  ngOnInit(): void {
    this.param=this.activatedRoute.snapshot.params.id_producto
    this.productoService.getOne(this.param).subscribe(
      res=>{
        this.producto=res;
        this.obtenerUsuario(this.producto.id_usuario);
      },
      err=>console.log(err)
    )
  }
  obtenerUsuario(id:number){
    this.usuarioService.getOne(id).subscribe(
      res=>{
        this.usuario=res[0];
      },
      err=>console.log(err)
    )
  }

}
