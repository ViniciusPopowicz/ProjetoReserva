import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservasComponent } from'./components/reservas/reservas.component';
import { PremiosComponent } from'./components/premios/premios.component';
import { ClientesComponent } from'./components/clientes/clientes.component';
import { VouchersComponent } from './components/vouchers/vouchers.component';
import { PagamentosComponent } from './components/pagamentos/pagamentos.component';
import { PacotesComponent } from './components/pacotes/pacotes.component';
import { ServicosComponent } from './components/servicos/servicos.component';
//import { HotelsComponent } from './components/hotels/hotels.component';
//import { QuartosComponent } from './components/quartos/quartos.component';
//import { RecibosComponent } from './components/recibos/recibos.component';

const routes: Routes = [
  {path: 'Premio', component:PremiosComponent},
  {path: 'Reserva', component:ReservasComponent},
  {path: 'Cliente', component:ClientesComponent},
  {path: 'Voucher', component:VouchersComponent},
  {path: 'Pagamento', component:PagamentosComponent},
  {path: 'Pacote', component:PacotesComponent},
  {path: 'Servico', component:ServicosComponent},
  //{path: 'Hotel', component:HotelsComponent},
  //{path: 'Quarto', component:QuartosComponent},
  //{path: 'Recibos', component:RecibosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
