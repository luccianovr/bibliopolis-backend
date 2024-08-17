import { Injectable } from '@nestjs/common';
import { Libro } from '../models/claseLibro';
@Injectable()
export class LibrosService {

    public listaLibros: Libro[] = [];

    crearLibro(libro: Libro): Libro {
        for (let i of this.listaLibros) {
            if (i.isbn == libro.isbn) {
                return null;
            }
        }
        this.listaLibros.push(libro);
        return libro;
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
            } else {
                return this.listaLibros;
            }
        }
    }


    eliminarSegunISBN(isbn: number): any {
        for (let i of this.listaLibros) {
            let index: number = this.listaLibros.findIndex(i => i.isbn == isbn)
            if (index != -1) {
                this.listaLibros.splice(index, 1)
            }
        }
    }
}
