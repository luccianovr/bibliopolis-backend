import { Injectable, Param, Body, Res, HttpStatus } from '@nestjs/common';
import { Usuario } from '../models/claseUsuario';
import { usuarioDTO } from 'src/models/usuarioDTO';

@Injectable()
export class UsuariosService {

    public listaUsuarios: Usuario[] = [];

    registrarUsuario(@Body() usuario: Usuario): string {
        let existeUsuario: boolean = false;
        for (let i of this.listaUsuarios) {
            if (i.correoElectronico == usuario.correoElectronico) {
                existeUsuario = true;
                break;
            }
        }
        if (!existeUsuario) {
            usuario.id = this.listaUsuarios.length + 1;
            this.listaUsuarios.push(usuario);
        }
        else {
            return 'El usuario ya existe';
        }
        return 'Usuario registrado exitosamente';
    }

    obtenerUsuarioId(@Param('id') id: number): any {
        for (let i of this.listaUsuarios) {
            if (i.id == id) {
                return i;
            }
        }
        //no pude colocar el res.status(404);
        return 'Error 404';
    }

    obtenerUsuarios(): usuarioDTO[] {
        let usuariosDTO: usuarioDTO[] = [];
        for (let i: number = 0; i < this.listaUsuarios.length; i++) {
            usuariosDTO.push(new usuarioDTO(this.listaUsuarios[i].id, this.listaUsuarios[i].nombre, this.listaUsuarios[i].correoElectronico, this.listaUsuarios[i].direccion, this.listaUsuarios[i].historialPedidos));
        }
        return usuariosDTO;
    }

    eliminarUsuarioporId(@Param('id') id: number): void {
        for (let i of this.listaUsuarios) {
            let index: number = this.listaUsuarios.findIndex(i => i.id == id)
            if (index != -1) {
                this.listaUsuarios.splice(index, 1)
            }
        }
    }
}
