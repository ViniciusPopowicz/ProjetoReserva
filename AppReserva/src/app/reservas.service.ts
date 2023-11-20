import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reserva } from './Reserva';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class ReservasService {
  apiUrl = 'http://localhost:5000/Reserva';
  constructor(private http: HttpClient) { }

  listar(): Observable<Reserva[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<Reserva[]>(url);
  }
  
  buscar(idReserva: number): Observable<Reserva> {
    const url = `${this.apiUrl}/buscar/${idReserva}`;
    return this.http.get<Reserva>(url);
  }
  
  cadastrar(reserva: Reserva): Observable<any> {
    reserva.dataReserva.toString();
    reserva.dataCheckIn.toString();
    reserva.dataCheckOut.toString();
    reserva.idCliente.toString();

    const url = `${this.apiUrl}/cadastrar`;
    return this.http.post<Reserva>(url, reserva, httpOptions);
  }
  
  alterar(reserva: Reserva): Observable<any> {
    const url = `${this.apiUrl}/alterar`;
    return this.http.put<Reserva>(url, reserva, httpOptions);
  }
  
  excluir(idReserva: number): Observable<any> {
    const url = `${this.apiUrl}/buscar/${idReserva}`;
    return this.http.delete<number>(url, httpOptions);
  }
}
