import { Pedido } from './clasePedido';


export class usuarioDTO {
    constructor(
        public id: number,
        public nombre: string,
        public correoElectronico: string,
        public direccion: string,
        public historialPedidos: Pedido[],
    ) { }
}