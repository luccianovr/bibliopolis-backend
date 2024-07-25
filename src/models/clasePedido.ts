import { Usuario } from './claseUsuario';
import { Item } from './claseItemPedido';

export class Pedido {
    constructor(
        public id: number,
        public usuario: Usuario,
        public fechaPedido: Date,
        public estado: string,
        public total: number,
        public items: Item[],
    ) { }
}