import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Voucher} from './Voucher'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class VouchersService {
  apiUrl = 'http://localhost:5000/Voucher';
  constructor(private http: HttpClient) { }

  listar(): Observable<Voucher[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<Voucher[]>(url);
  }
  buscar(id: number): Observable<Voucher> {
    const url = `${this.apiUrl}/buscar/${id}`;
    return this.http.get<Voucher>(url);
  }
  cadastrar(voucher: Voucher): Observable<any> {
    const url = `${this.apiUrl}/cadastrar`;
    return this.http.post<Voucher>(url, voucher, httpOptions);
  }
  alterar(voucher: Voucher): Observable<any> {
    const url = `${this.apiUrl}/alterar`;
    return this.http.put<Voucher>(url, voucher, httpOptions);
  }
  excluir(id: string): Observable<any> {
    const url = `${this.apiUrl}/buscar/${id}`
    ;
    return this.http.delete<string>(url, httpOptions);
  }
}
