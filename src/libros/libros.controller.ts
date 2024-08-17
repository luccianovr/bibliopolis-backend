import { Controller, Post, Body, Param, Get, Query, Delete, Res } from '@nestjs/common';
import { Libro } from 'src/models/claseLibro';
import { LibrosService } from './libros.service';
import { Response } from 'express';

@Controller('libros')
export class LibrosController {

    constructor(private readonly servicio: LibrosService) {

    }

    @Post()
    crearLibro(@Body() libro: Libro, @Res() response: Response): any {
        const LIBROCREADO = this.servicio.crearLibro(libro);
        if (LIBROCREADO) {
            response.status(201).send(LIBROCREADO);
        } else {
            response.status(400).send({ error: "ya existe este libro" });
        }
    }

    @Get(':isbn')
    obtenerSegunISBN(@Param('isbn') isbn: number, @Res() response: Response) {
        const libro = this.servicio.obtenerSegunISBN(isbn);
        if (libro) {
            response.status(200).send(libro);

        } else {
            response.status(404).send({ error: "No exixste" });
        }
    }

    @Get()
    obtenerLibros(
        @Query('autor') autor: string,
        @Query('genero') genero: string,
        @Res() response: Response) {
        const encontrado = this.servicio.obtenerLibros(autor, genero);
        if (encontrado) {
            response.status(200).send(encontrado);
        } else {
            response.status(404).send({ error: "No hay libros" });
        }
    }


    @Delete(':isbn')
    eliminarSegunISBN(@Param('isbn') isbn: number): void {
        this.servicio.eliminarSegunISBN(isbn);
    }
}
