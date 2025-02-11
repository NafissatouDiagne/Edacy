import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://127.0.0.1:3000/api'; // Ajoutez le protocole HTTP ici

  constructor(private http: HttpClient) { }

  postData(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/data`,data);
  }
  getData():Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/datas`);
  }
  /**
   * Register
   */
  postRegister(data:any):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/register`,data)
  }
  getRegister():Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/user`)
  }
  /**
   * Login
   */
  postLogin(data:any):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/login`,data)
  }

}
