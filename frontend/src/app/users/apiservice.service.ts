import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) { }

  apiUrl = 'http://localhost:3000/api';



  signup(data:any):Observable<any>
  {
    
    console.log(data,'data##');
    return this.http.post(`${this.apiUrl}/signup`,data);
  }


  login(data:any):Observable<any>
  {
    console.log(data,'data###');
    return this.http.post(`${this.apiUrl}/login`,data);
    
  }

  getToken()
  {
    return localStorage.getItem('token');
  } 






}
