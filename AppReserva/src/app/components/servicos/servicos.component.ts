import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Servico} from 'src/app/Servico';
import { ServicosService } from './../../servicos.service';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit{

  servicos: Servico[] = [];

  formulario: any;
  tituloFormulario: string = '';
  
  constructor(private servicosService : ServicosService) {
   }

  ngOnInit(): void {
    this.tituloFormulario = 'Novo Servico';
    this.formulario = new FormGroup({
      idServico: new FormControl(null),
      descricao: new FormControl(null),
      valorServico: new FormControl(null),
      pacotes: new FormControl(null),
    })



    this.servicosService.listar().subscribe(servicos => {
      this.servicos = servicos;
      if (this.servicos && this.servicos.length > 0) {
        this.formulario.get('idServico')?.setValue(this.servicos[0].IdServico);
      }
    });
  }
  enviarFormulario(): void {
    const servico : Servico = this.formulario.value;
    servico.Pacotes = [];
    servico.IdServico = 0;
    const observer: Observer<Servico> = {
        next(_result): void {alert('Serviço salvo com sucesso.');
      },error(error): void {alert(`Erro ao salvar! ${servico.IdServico}\n${servico.Pacotes}` + error);
    },complete(): void {},
  };

    if (servico.IdServico && !isNaN(Number(servico.IdServico))) 
    {
      this.servicosService.atualizar(servico).subscribe(observer);
    } else 
    {
      this.servicosService.cadastrar(servico).subscribe(observer);}
  } 
  
}
