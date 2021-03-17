import { Producto } from "./producto";

// hay que tener la referencia al producto y la cantidad
export class Compra {
    constructor(
        public referencia : Producto,
        public cantidad : number
    ) {}
}

export class CarritoCompra {
    constructor(

    ) {}

    productosComprados : Compra[] = [];
    total : number = 0.0;

    guardarCompra(laCompra: Compra){
        // Aqui se almacena la compra existente o no
        let compraExistente = this.productosComprados.find(
            // Esto devuelve un boolean (encontrado o no)
            (compra: Compra) => {
                return compra.referencia == laCompra.referencia;
            }
        );
        // Si esa compra ya existe en la matriz, aumentamos la cantidad de esa compra
        if (compraExistente){
            compraExistente.cantidad++;
            this.total = this.total + compraExistente.referencia.precioUnidad;
        }
        // Si no existe, la metemos en la matriz
        else {
            this.productosComprados.push(laCompra);
            this.total = this.total + laCompra.referencia.precioUnidad;
        }

    }

    quitarCompra (laCompra: Compra){
        // Buscamos la posicion que ocupa la compra (si existe) dentro de la matriz de compras
        let indice = this.productosComprados.findIndex(
            // Esto es un predicado
            (compra : Compra) => {
                return compra == laCompra;
            }
        );
        // Si se ha encontrado esa compra, la removemos (en este caso, no importa si hay mas de una cantidad, la quitamos toda)
        if(indice != -1){
            // Removemos de la matriz la compra situada en el indice, y solo un elemento (indice,1)
            this.productosComprados.splice(indice,1);
            this.total = this.total - laCompra.referencia.precioUnidad * laCompra.cantidad;
        }
    }
}