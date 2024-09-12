import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://127.0.0.1:8000/api'; // Ajoutez le protocole HTTP ici
   currentUser:any;
  constructor(private http: HttpClient) { }

 /* postData(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/data`,data);
  }
  getData():Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/datas`);
  }*/
  /**
   * Register
   */
  postRegister(data:any):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/register`,data)
  }
  getRegister():Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/allUser`)
  }
  /**
   * Login
   */
  postLogin(data:any):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/login`,data)
  }
  getUserData(token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<any>(`${this.apiUrl}/profile`, { headers });
  }
  /**
   * Update User
   */
  updateUserData(data:any,token:string):Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`

    });
    return this.http.put(`${this.apiUrl}/updateprofile`,data,{headers})
  }
/**
 * Patients
 *
 */

postaddPatients(data:any):Observable<any>{
  return this.http.post(`${this.apiUrl}/addpatients`,data);
}
getPatients():Observable<any>{
  return this.http.get(`${this.apiUrl}/allpatients`)
}
}

