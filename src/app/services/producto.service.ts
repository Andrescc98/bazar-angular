import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private URL:string='http://localhost:3000/api';

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(`${this.URL}/producto`);
  }
  getOne(id:number){
    return this.http.get(`${this.URL}/producto/${id}`);
  }
}
