
export class Producto {

    static contadorId : number = 1;

    id : number;

    constructor(
        public nombre : string,
        public descripcion : string,
        public precioUnidad : number,
        public disponible : boolean = true,
        public stockEnAlmacen : number = 50
    ) {
        // Asociamos el contador para que el id tome valores
        this.id =Producto.contadorId++
    }




}