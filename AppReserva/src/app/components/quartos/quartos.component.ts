import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Quarto } from 'src/app/Quarto';
import { QuartosService } from 'src/app/quartos.service';

@Component({
  selector: 'app-quartos',
  templateUrl: './quartos.component.html',
  styleUrls: ['./quartos.component.css']
})
export class QuartosComponent implements OnInit{
  formulario: any;
  tituloFormulario: string = '';

  constructor(private QuartosService : QuartosService) { }

  ngOnInit(): void {
      this.formulario = "Novo Quarto"
      this.formulario = new FormGroup({
        nroQuarto: new FormControl(null),
        nroHospedes: new FormControl(null),
        valor: new FormControl(null),
        })
  }
  enviarFormulario(): void {
    const quarto : Quarto = this.formulario.value;
    this.QuartosService.cadastrar(quarto).subscribe(result => {
      alert('Quarto inserido com sucesso.');
    })
  } 
}
