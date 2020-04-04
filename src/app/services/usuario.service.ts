import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Usuario } from "../models/usuario";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private URL:string='http://localhost:3000/api';

  constructor(private http:HttpClient) { }

  login(usuario:Usuario){
    return this.http.post<any>(`${this.URL}/usuario/login`, usuario);
  }

  getOne(id:number){
    return this.http.get(`${this.URL}/usuario/${id}`);
  }
  
  add(usuario:any){
    return this.http.post(`${this.URL}/usuario`, usuario);
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }
  
  getToken(){
    return localStorage.getItem('token');
  }
}
