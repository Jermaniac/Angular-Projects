
export interface Cliente {

    id ? : number,
    nif ? : string,
    nombre: string,
    apellidos : string,
    // No estoy seguro de si tengo correo por lo que le pongo interrogacion
    provincia ? : string,
    correo ?: string
}