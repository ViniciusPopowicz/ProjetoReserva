import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pacote } from './Pacote';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })}




@Injectable({
  providedIn: 'root'
})
export class PacotesService {
  
  apiUrl = 'http://localhost:5000/Pacote'

  constructor(private http: HttpClient) { }

  listar(): Observable<Pacote[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<Pacote[]>(url);
  }
  buscar(IdPacote: number): Observable<Pacote> {
    const url = `${this.apiUrl}/buscar/${IdPacote}`;
    return this.http.get<Pacote>(url);
  }
  cadastrar(pacote: Pacote): Observable<any> {
    const url = `${this.apiUrl}/cadastrar`;
    return this.http.post<Pacote>(url, pacote, httpOptions);
  }
  atualizar(pacote: Pacote): Observable<any> {
    const url = `${this.apiUrl}/atualizar`;
    return this.http.put<Pacote>(url, Pacote, httpOptions);
  }
  excluir(IdPacote: number): Observable<any> {
    const url = `${this.apiUrl}/buscar/${IdPacote}`;
    return this.http.delete<string>(url, httpOptions);
  }

}
