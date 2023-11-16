import { Reserva } from "./Reserva";

export class Pagamento{
    idPagamento: number=0;
    reserva: Reserva| undefined;
    valor: number=0;
    metodoPagamneto: Number=0;
}