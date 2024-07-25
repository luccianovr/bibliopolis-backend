import { Pedido } from './clasePedido';

export class Usuario {
    constructor(
        public id: number,
        public nombre: string,
        public correoElectronico: string,
        public contraseña: string,
        public direccion: string,
        public historialPedidos: Pedido[],
    ) { }
}