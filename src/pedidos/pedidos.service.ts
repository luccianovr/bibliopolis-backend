import { Injectable } from '@nestjs/common';
import { Pedido } from '../models/clasePedido';
import { Libro } from '../models/claseLibro';

@Injectable()
export class PedidosService {


    public listaPedidos: Pedido[] = [];
    crearPedido(pedido: Pedido): Pedido[] {

        this.listaPedidos.push(pedido);
        return this.listaPedidos;
    }

    obtenerPedidoId(id: number): any {
        for (let i of this.listaPedidos) {
            if (i.id == id) {
                return i;
            }
        }
        return null;

    }

    obtenerpedidoFiltrado(
        estado: string,
        usuario: string): Pedido {
        return
    }


    modificarEstadoPedido(id: number, estado: string): Pedido {
        return
    }
}
