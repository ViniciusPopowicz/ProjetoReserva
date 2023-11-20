import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { PremiosService } from 'src/app/premios.service';
import { Premio } from 'src/app/Premio';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-premios',
  templateUrl: './premios.component.html',
  styleUrls: ['./premios.component.css']
})
export class PremiosComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = '';
  constructor(private premiosService : PremiosService) { }

  ngOnInit(): void {
    this.tituloFormulario = 'Novo Premio';
    this.formulario = new FormGroup({
      descricao: new FormControl(null)
    })
  }

  enviarFormulario(): void {
    const premio : Premio = this.formulario.value;
    this.premiosService.cadastrar(premio).subscribe(result => {
      alert('Premio cadastrado com sucesso.');
    })
  }
}
