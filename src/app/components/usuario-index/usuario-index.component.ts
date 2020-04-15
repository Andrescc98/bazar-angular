import { Component, OnInit } from '@angular/core';

import { ProductoService } from "../../services/producto.service";

@Component({
  selector: 'app-usuario-index',
  templateUrl: './usuario-index.component.html',
  styleUrls: ['./usuario-index.component.css']
})
export class UsuarioIndexComponent implements OnInit {

  public productos:any;

  constructor(
    private productoService:ProductoService
  ) { }

  ngOnInit(): void {
    this.productoService.getAllUser().subscribe(
      res=>{
        this.productos=res;
      },
      err=>console.log(err)
    )
  }

}
