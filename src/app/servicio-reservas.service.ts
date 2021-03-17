import { Injectable } from '@angular/core';
import { DatosBillete } from './entidades/datosbilletes';
import { Trayecto } from './entidades/trayecto';

@Injectable({
  providedIn: 'root' // Se inyecto como Singleton
})
export class ServicioReservasService {

  // Datos compartidos entre buscador y resultados

  // datos = {
  //   billetes : [] 
  // } = { billetes : [] };

  datos : DatosBillete = new DatosBillete([]); 

  ciudades : string[] = ["Barcelona","Madrid", "Sevilla"];

  datosTrayectos : Trayecto[] = [];

  // Cuando se construya el elemento ejecuta los metodos de generar
  constructor() { 
    this.generarDatos();
  }

  generarCiudad(
    opciones : string [],
    excluir : string = ""
  ){
    let ciudad : string = "";
    do {
      let indice = Math.floor(Math.random() * opciones.length);
      ciudad = opciones[indice];
    } while (ciudad == excluir);

    return ciudad;


  }

  generarDatos() {

    let fechaInicial = new Date();
    let numeroDeDias = 7;
    let numeroDeHoras = 4;

    for (let i = 0; i < numeroDeDias; i++){
      let origen = this.generarCiudad(this.ciudades);
      let destino = this.generarCiudad(this.ciudades, origen);

      for (let hora = 0; hora < 24; hora++){
        let horaSalida = (24 / numeroDeHoras) * 4;
        let horaLlegada = horaSalida + 2;
        let precio = Math.random() * 100.0;

        this.datosTrayectos.push(
          new Trayecto(
            origen,destino,new Date(
              fechaInicial.getFullYear(),
              fechaInicial.getMonth(),
              fechaInicial.getDate()+ i
            ),
            precio, horaSalida, horaLlegada
          )
        );
      }
    }
  }
}
