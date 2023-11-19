import { Component, OnInit } from '@angular/core';
import { PacotesService } from './../../pacotes.service';
import { Pacote } from 'src/app/Pacote';
import { Observer } from 'rxjs';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Servico } from 'src/app/Servico';
import { ServicosService } from 'src/app/servicos.service';

@Component({
  selector: 'app-pacotes',
  templateUrl: './pacotes.component.html',
  styleUrls: ['./pacotes.component.css']
})
export class PacotesComponent implements OnInit{

  pacotes: Pacote[] = [];
  servicos: Servico[] = []; // Certifique-se de importar o Servico, se ainda não estiver
  servicosSelecionados: Servico[] = [];


  formulario: any;  
  tituloFormulario: string = '';

  constructor(private pacotesService: PacotesService, private servicosService: ServicosService) {}


  ngOnInit(): void {


    this.tituloFormulario = 'Novo Pacote';
    this.formulario = new FormGroup({
      idPacote: new FormControl(null),
      servicos: new FormArray([]),
      valorPacote: new FormControl(null)
    });

    this.servicosService.listar().subscribe(servicosListados => {
      this.servicos = servicosListados;
    });


    this.pacotesService.listar().subscribe(pacotes => {
      this.pacotes = pacotes;
      if (this.pacotes && this.pacotes.length > 0) {
        this.formulario.get('idPacote')?.setValue(this.pacotes[0].idPacote);
      }
    });
  }

  enviarFormulario(): void {
    // Crie um novo objeto Pacote
    const pacote: Pacote = {
      idPacote: 0,
      servicos: this.servicosSelecionados,
      valorPacote: 0,  // Você pode precisar calcular o valor com base nos serviços selecionados
    };


    const observer: Observer<Pacote> = {
      next(_result): void {
        alert('Pacote salvo com sucesso.');
      },
      error(error): void {
        console.log(error.error);
        alert(`Erro ao salvar! ${error.error}`);
      },
      complete(): void {},
    };
  
    // Enviar o pacote para o serviço
    this.pacotesService.cadastrar(pacote).subscribe(observer);
  }
  



  checkboxChange(event: any, servico: Servico) {
    // Verifica se o checkbox está marcado ou desmarcado
    if (event.target.checked) {
      // Adiciona o serviço aos serviços selecionados
      if(!this.servicosSelecionados.includes(servico)){
        this.servicosSelecionados.push(servico);
      }
    }else{
      // Remove o serviço da lista de serviços selecionados
      this.servicosSelecionados.splice(this.servicosSelecionados.indexOf(servico), 1);
    }

    // Exibe os serviços selecionados no console (você pode fazer algo mais útil com eles)
    //console.log('Serviços selecionados:', this.servicosSelecionados);
  }

}

