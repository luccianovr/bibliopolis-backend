import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { Pedido } from 'src/models/clasePedido';
import { Usuario } from 'src/models/claseUsuario';
import { PedidosService } from './pedidos.service';

@Controller('pedidos')
export class PedidosController {

    constructor(private readonly servicio: PedidosService

    ) { }

    @Post()
    crearPedido(@Body() pedido: Pedido): Pedido[] {
        return this.servicio.crearPedido(pedido);
    }

    @Get(':id')
    obtenerPedidoId(@Param('id') id: number): Pedido {
        return this.servicio.obtenerPedidoId(id);
    }

    @Get()
    obtenerpedidoFiltrado(
        @Query('estado') estado: string,
        @Query('usuario') usuario: string): Pedido {
        return
    }

    @Put(':id')
    modificarEstadoPedido(@Param('id') id: number, @Body('estado') estado: string): Pedido {
        return
    }
}
