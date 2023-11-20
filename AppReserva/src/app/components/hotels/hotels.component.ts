import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hotel } from 'src/app/Hotel';
import { HotelsService } from 'src/app/hotels.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit{
  formulario: any;
  tituloFormulario: string = '';

  constructor(private HotelsService : HotelsService) { }

  ngOnInit(): void {
      this.formulario = "Novo Hotel"
      this.formulario = new FormGroup({
        nroHotel: new FormControl(null),
        nroHospedes: new FormControl(null),
        valor: new FormControl(null),
        })
  }
  enviarFormulario(): void {
    const hotel : Hotel = this.formulario.value;
    this.HotelsService.cadastrar(hotel).subscribe(result => {
      alert('Hotel inserido com sucesso.');
    })
  } 
}
