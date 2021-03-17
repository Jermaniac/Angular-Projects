
export class ConfiguracionFiltro {

    constructor(
        public categorias : string [],
        public rangoMinInicial : number,
        public rangoMinFinal : number,
        public rangoMaxInicial : number,
        public rangoMaxFinal : number
    ) {}
};