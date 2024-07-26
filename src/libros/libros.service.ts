import { Injectable, Post, Body, Param, Get, Query, Delete } from '@nestjs/common';
import { Libro } from '../models/claseLibro';
@Injectable()
export class LibrosService {

    public listaLibros: Libro[] = [];

    crearLibro(libro: Libro): void {
        for (let i of this.listaLibros) {
            if (i.isbn === libro.isbn) {
                return null;
            }
        }
        this.listaLibros.push(libro);
    }

    obtenerSegunISBN(isbn: number): Libro {
        for (let i of this.listaLibros) {
            if (i.isbn == isbn) {
                return i;
            }
        }
        return null;
    }

    obtenerLibros(autor: string, genero: string): any {
        for (let i of this.listaLibros) {
            if (i.autor === autor || i.genero === genero) {
                return i;
            }
        }
        return this.listaLibros;
    }


    eliminarSegunISBN(@Param('isbn') isbn: number): void {
        for (let i of this.listaLibros) {
            let index: number = this.listaLibros.findIndex(i => i.isbn == isbn)
            if (index != -1) {
                this.listaLibros.splice(index, 1)
            }
        }
    }
}
