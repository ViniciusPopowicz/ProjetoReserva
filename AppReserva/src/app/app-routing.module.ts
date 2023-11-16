import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservasComponent } from'./components/reservas/reservas.component';
import { PremiosComponent } from'./components/premios/premios.component';
import { ClientesComponent } from'./components/clientes/clientes.component';
import { VouchersComponent } from './components/vouchers/vouchers.component';
import { PagamentosComponent } from './components/pagamentos/pagamentos.component';

const routes: Routes = [
  {path: 'Premio', component:PremiosComponent},
  {path: 'Reserva', component:ReservasComponent},
  {path: 'Cliente', component:ClientesComponent},
  {path: 'Voucher', component:VouchersComponent},
  {path: 'Pagamento', component:PagamentosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
