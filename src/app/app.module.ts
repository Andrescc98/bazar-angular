import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductComponent } from './components/product/product.component';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';
import { UsuarioLoginComponent } from './components/usuario-login/usuario-login.component';
import { UsuarioIndexComponent } from './components/usuario-index/usuario-index.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

import { ProductoService } from "../app/services/producto.service";
import { UsuarioService } from "./services/usuario.service";
import { TokenInterceptorService } from "./services/token-interceptor.service";
import { CategoriaService } from "./services/categoria.service";

import { UsuarioGuard } from "./guard/usuario.guard";
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsListComponent,
    ProductComponent,
    UsuarioFormComponent,
    UsuarioLoginComponent,
    UsuarioIndexComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ProductoService,
    UsuarioService,
    CategoriaService,
    UsuarioGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
