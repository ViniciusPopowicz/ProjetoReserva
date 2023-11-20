import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReservasService } from 'src/app/reservas.service';
import { ClientesService } from 'src/app/clientes.service';
import { Reserva } from 'src/app/Reserva';
import { Cliente } from 'src/app/Cliente';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit{
  formulario: any;
  tituloFormulario: string = '';
  
  constructor(private ReservasService : ReservasService) { }
  
  ngOnInit(): void {
    this.tituloFormulario = 'Nova Reserva';
    this.formulario = new FormGroup({
      dataCheckIn: new FormControl(null),
      dataCheckOut: new FormControl(null),
      idQuarto: new FormControl(null),
      idHotel: new FormControl(null),
      idPacote: new FormControl(null),
      idCliente: new FormControl(null),
      idVoucher: new FormControl(null)
    })
  }
  
  enviarFormulario(): void {
    const reserva : Reserva = this.formulario.value;
    
    reserva.dataReserva = new Date().toISOString();
    const dataFormatada : string[] = reserva.dataReserva.split('T');
    reserva.dataReserva = dataFormatada[0];

    this.ReservasService.cadastrar(reserva).subscribe(result => {
      alert('Reserva cadastrada com sucesso.');
    })
  }

}
