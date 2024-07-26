import { Controller, Post, Body, Param, Get, Delete, Res, HttpStatus } from '@nestjs/common';
import { Usuario } from '../models/claseUsuario';
import { UsuariosService } from './usuarios.service';
import { usuarioDTO } from 'src/models/usuarioDTO';
import { response } from 'express';

@Controller('usuarios')
export class UsuariosController {

    constructor(private readonly servicio: UsuariosService) {

    }

    @Post()
    registrarUsuario(@Body() usuario: Usuario): string {
        return this.servicio.registrarUsuario(usuario);
    }

    @Get(':id')
    obtenerUsuarioId(@Res() response, @Param('id') id: number) {
        let encontrado: Usuario = this.servicio.obtenerUsuarioId(id);
        if (encontrado == null) {
            return response.status(HttpStatus.NOT_FOUND).send("Error 404");
        }
        return response.status(HttpStatus.OK).send(encontrado);
    }

    @Get()
    obtenerUsuarios(): usuarioDTO[] {
        return this.servicio.obtenerUsuarios();
    }

    @Delete(':id')
    eliminarUsuarioporId(@Param('id') id: number): void {
        return this.servicio.eliminarUsuarioporId(id);
    }
}
