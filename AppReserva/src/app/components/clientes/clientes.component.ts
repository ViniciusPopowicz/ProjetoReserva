import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Cliente } from 'src/app/Cliente';
import { ClientesService } from 'src/app/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit{
  formulario: any;
  tituloFormulario: string = '';
  clientes : Cliente[] = [];
  constructor(private ClientesService : ClientesService) { }

  ngOnInit(): void {
    this.tituloFormulario = 'Novo Cliente';
    this.formulario = new FormGroup({
      cpf: new FormControl(null),
      nome: new FormControl(null),
      telefone: new FormControl(null)
    })

    this.ClientesService.listar().subscribe(clientesListados => {
      this.clientes = clientesListados;
    });
  }
  enviarFormulario(): void {
    const cliente : Cliente = this.formulario.value;
    this.ClientesService.cadastrar(cliente).subscribe(result => {
      alert('Cliente inserido com sucesso.');
    })
  } 
}