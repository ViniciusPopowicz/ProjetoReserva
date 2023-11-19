import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Servico } from './Servico';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })}




@Injectable({
  providedIn: 'root'
})
export class ServicosService {
  
  apiUrl = 'http://localhost:5000/Servico'

  constructor(private http: HttpClient) { }

  listar(): Observable<Servico[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<Servico[]>(url);
  }
  buscar(idServico: number): Observable<Servico> {
    const url = `${this.apiUrl}/buscar/${idServico}`;
    return this.http.get<Servico>(url);
  }
  cadastrar(servico: Servico): Observable<any> {
    const url = `${this.apiUrl}/cadastrar`;
    return this.http.post<Servico>(url, servico, httpOptions);
  }
  atualizar(servico: Servico): Observable<any> {
    const url = `${this.apiUrl}/atualizar`;
    return this.http.put<Servico>(url, servico, httpOptions);
  }
  excluir(idServico: number): Observable<any> {
    const url = `${this.apiUrl}/buscar/${idServico}`;
    return this.http.delete<string>(url, httpOptions);
  }
}
