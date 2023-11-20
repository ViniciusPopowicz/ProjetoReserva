import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Premio } from './Premio';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PremiosService {
  apiUrl = 'http://localhost:5000/Premio';
  constructor(private http: HttpClient) { }
  listar(): Observable<Premio[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<Premio[]>(url);
  }
  
  buscar(idPremio: number): Observable<Premio> {
    const url = `${this.apiUrl}/buscar/${idPremio}`;
    return this.http.get<Premio>(url);
  }
  
  cadastrar(premio: Premio): Observable<any> {
    const url = `${this.apiUrl}/cadastrar`;
    return this.http.post<Premio>(url, premio, httpOptions);
  }
  
  alterar(premio: Premio): Observable<any> {
    const url = `${this.apiUrl}/alterar`;
    return this.http.put<Premio>(url, premio, httpOptions);
  }
  
  excluir(idPremio: number): Observable<any> {
    const url = `${this.apiUrl}/excluir/${idPremio}`;
    return this.http.delete<number>(url, httpOptions);
  }
}
