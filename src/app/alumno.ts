export class Alumno {

    // Nos genera propiedad para cada argumento con su get/set
    constructor(
        public nif : string,
        public nombre: string,
        public apellidos: string,
        public correo : string
    ) { }

    enviarCorreo (titulo : string, texto : string) {
        let contenido = `
            Correo para ${this.correo}
            Titulo : ${titulo}
            Mensaje : ${texto}
        `;
        
        alert(contenido);
    }
}
