import { Component, OnInit } from '@angular/core';
import { CategoriaService } from "../../services/categoria.service";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  public categorias:any;
  public imgPath: any;

  constructor(
    private categoriaService:CategoriaService
  ) { }

  ngOnInit(): void {
    this.categoriaService.getAll().subscribe(
      res=>{
        this.categorias=res;
      },
      err=>console.log(err)
    )
  }

  mostrarImagen(event:any){
    this.imgPath=event.target.value.split('\\');
    this.imgPath=this.imgPath[this.imgPath.length-1];
 }

}
