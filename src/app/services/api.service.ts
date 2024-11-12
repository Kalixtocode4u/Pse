import { HttpClient, HttpHeaders, provideHttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUsuario(): Observable<any>{
    const url = 'http://localhost:5000/usuarios'
    return this.http.get<any>(url)
  }

  getUsuarioById(id: number){
    const url = 'http://localhost:5000/usuarios?id='+id
    return this.http.get<any>(url)
  }

  postUsuario(data: any){
    const url = 'http://localhost:5000/usuarios'
    const headers = new HttpHeaders({'Content-type': 'application/json'})
    return this.http.post<any>(url, data, {headers})
  }

  putUsuario(id: number, data: any){
    const url = 'http://localhost:5000/usuarios?id='+id
    const headers = new HttpHeaders({'Content-type': 'application/json'})
    return this.http.put<any>(url, data, {headers})
  }

  deleteUsuario(id: number): Observable<any>{
    const url = 'http://localhost:5000/usuarios?id='+id
    return this.http.delete<any>(url)
  }
}
