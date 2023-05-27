import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) { }
  sentmail=(email:any)=>{
    return this.http.post('http://localhost:3000/api/send',email)
  }
}
