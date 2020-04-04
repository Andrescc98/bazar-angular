import { Injectable } from '@angular/core';
import { HttpInterceptor } from "@angular/common/http";

import { UsuarioService } from "./usuario.service";

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(
    private usuarioServices:UsuarioService,

  ) { }

  intercept( req, next ){
    const tokenizenReq=req.clone({
      setHeaders:{
        authorization:`bearer ${this.usuarioServices.getToken()}`
      }
    })
    return next.handle(tokenizenReq)
  }
}
