import { Libro } from './claseLibro';

export class Item {
    constructor(
        public libro: Libro,
        public cantidad: Libro[]
    ) { }
}