import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Servico} from 'src/app/Servico';
import { Observer } from 'rxjs';
import { PacotesService } from 'src/app/pacotes.service';
import { ServicosService } from 'src/app/servicos.service';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit{

  servicos: Servico[] = [];

  formulario: any;
  tituloFormulario: string = '';
  
  constructor(private servicosService: ServicosService) { }

  ngOnInit(): void {
    this.tituloFormulario = 'Novo Servico';
    this.formulario = new FormGroup({
      idServico: new FormControl(null),
      Descricao: new FormControl(null),
      ValorServico: new FormControl(null),
      Pacotes: new FormControl(null),
    })



    this.servicosService.listar().subscribe(servicos => {
      this.servicos = servicos;
      if (this.servicos && this.servicos.length > 0) {
        this.formulario.get('IdServico')?.setValue(this.servicos[0].IdServico);
      }

      console.log('Serviços carregados:', this.servicos);
    });

  }
  enviarFormulario(): void {
    const servico : Servico = this.formulario.value;
    servico.Pacotes = [];
    servico.IdServico = 0;
    
    this.servicos.forEach(servico => {
      console.log(servico);
    });


    const observer: Observer<Servico> = {
        next(_result): void {alert('Modelo salvo com sucesso.');
      },error(error): void {alert(`Erro ao salvar!`);
    },complete(): void {},
  };
    this.servicosService.cadastrar(servico).subscribe(observer);
  }
}

