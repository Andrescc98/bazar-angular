import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsListComponent } from "./components/products-list/products-list.component";
import { ProductComponent } from "./components/product/product.component";


const routes: Routes = [
  {path:'', component:ProductsListComponent},
  {path:':id_producto', component:ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
