import { Controller, Post, Body, Param, Get, Query, Delete } from '@nestjs/common';
import { Libro } from 'src/models/claseLibro';
import { LibrosService } from './libros.service';

@Controller('libros')
export class LibrosController {

    constructor(private readonly servicio: LibrosService) {

    }

    @Post()
    crearLibro(@Body() libro: Libro): void {

        this.servicio.crearLibro(libro);
    }

    @Get(':isbn')
    obtenerSegunISBN(@Param('isbn') isbn: number): Libro {
        return this.servicio.obtenerSegunISBN(isbn);
    }

    @Get()
    obtenerLibros(
        @Query('autor') autor: string,
        @Query('genero') genero: string,
    ): Libro {
        return this.servicio.obtenerLibros(autor, genero);
    }


    @Delete(':isbn')
    eliminarSegunISBN(@Param('isbn') isbn: number): void {
        this.servicio.eliminarSegunISBN(isbn);
    }
}
