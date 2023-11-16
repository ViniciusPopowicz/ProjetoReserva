import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VouchersService } from 'src/app/vouchers.service';
import { Voucher } from 'src/app/Voucher';

@Component({
  selector: 'app-vouchers',
  templateUrl: './vouchers.component.html',
  styleUrls: ['./vouchers.component.css']
})
export class VouchersComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = '';
  constructor(private VouchersService : VouchersService) { }
  ngOnInit(): void {
    this.tituloFormulario = 'Novo Voucher';
    this.formulario = new FormGroup(
      {
        descricao: new FormControl(null)
      })
    }
    enviarFormulario(): void {
      const voucher : Voucher = this.formulario.value;
      this.VouchersService.cadastrar(voucher).subscribe(result => {
        alert('Voucher inserido com sucesso.');
      })
    }
}
