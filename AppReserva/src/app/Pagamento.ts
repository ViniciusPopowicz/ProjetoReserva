import { Reserva } from "./Reserva";

export class Pagamento{
    idPagamento: number=0;
    reserva: Reserva| undefined;
    valor: number=0;
    metodoPagamento: Number=0;
}