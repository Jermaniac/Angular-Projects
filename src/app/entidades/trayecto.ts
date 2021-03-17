
export class Trayecto {

    constructor(
        public origen : string,
        public destino : string,
        public fecha : Date,
        public precio : number,
        public horaSalida ? : number,
        public horaLlegada ? : number,
    ) {}
}