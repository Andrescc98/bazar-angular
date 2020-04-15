import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsListComponent } from "./components/products-list/products-list.component";
import { ProductComponent } from "./components/product/product.component";
import { UsuarioFormComponent } from "./components/usuario-form/usuario-form.component";
import { UsuarioLoginComponent } from "./components/usuario-login/usuario-login.component";
import { UsuarioIndexComponent } from "./components/usuario-index/usuario-index.component";
import { ProductFormComponent } from './components/product-form/product-form.component';

import { UsuarioGuard } from "./guard/usuario.guard";

// usar canActivate:[AuthGuard] para rutas privadas
const routes: Routes = [
  {path:'', component:ProductsListComponent},
  {path:'add', canActivate:[UsuarioGuard], component:ProductFormComponent},
  {path:'usuario/registro', component:UsuarioFormComponent},
  {path:'usuario/login', component:UsuarioLoginComponent},
  {path:'usuario/index', canActivate:[UsuarioGuard], component:UsuarioIndexComponent},
  {path:':id_producto', component:ProductComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
