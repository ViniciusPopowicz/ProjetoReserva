import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PagamentosService } from 'src/app/pagamentos.service';
import { Pagamento } from 'src/app/Pagamento';

@Component({
  selector: 'app-pagamentos',
  templateUrl: './pagamentos.component.html',
  styleUrls: ['./pagamentos.component.css']
})
export class PagamentosComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = '';
  pagamentos : Pagamento[] = [];
  constructor(private PagamentosService : PagamentosService) { }
  ngOnInit(): void {
    this.tituloFormulario = 'Novo Pagamento';
    this.formulario = new FormGroup(
      {
        reserva: new FormControl(null),
        valor: new FormControl(null),
        metodoPagamento: new FormControl(null)
      })
      this.PagamentosService.listar().subscribe(pagamentosListados => {
        this.pagamentos = pagamentosListados;
      });
    }
    enviarFormulario(): void {
      const pagamento : Pagamento = this.formulario.value;
      this.PagamentosService.cadastrar(pagamento).subscribe(result => {
        alert('Pagamento inserido com sucesso.');
      })
    }
}
