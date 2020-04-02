import { Component, OnInit } from '@angular/core';

import { ProductoService } from "../../services/producto.service";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  public productos:any=[];

  constructor(private productoService:ProductoService) { }

  ngOnInit(): void {
    this.productoService.getAll().subscribe(
      res=>{
        this.productos=res;
      },
      err=>console.log(err)
    )
  }

}
