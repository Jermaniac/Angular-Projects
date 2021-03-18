import { Component, OnInit } from '@angular/core';
import { Observer, Subscription } from 'rxjs';
import {skip,filter,map} from "rxjs/operators"
import { ProbarObservablesService } from '../probar-observables.service';

@Component({
  selector: 'app-probar-observables',
  templateUrl: './probar-observables.component.html',
  styleUrls: ['./probar-observables.component.css']
})
export class ProbarObservablesComponent implements OnInit {

  observador : Observer<any>;

  subscripcionASecuencia : Subscription;

  subscripcionGeoLocation : Subscription;

  constructor(
    public servicio : ProbarObservablesService
  ) { }

  ngOnInit(): void {

    this.observador = {
      next : (x) => {
        console.log("Hemos recibido: ");
        console.log(x);
      },
      error : (elError) => {
        console.log("Hemos recibido error:");
        console.log(elError);
      },
      complete : () => {
        console.log("Hemos recibido toda la informacion");
      }
    };

  }

  conectarADatos() {
    // Aqui conectamos con un Observable
    // Tienes que suscribirte para recibir info
    // Le pasas el observador
    // ESTO ES ASINCRONO
    this.servicio.datos.subscribe(this.observador);
  }

  conectarASecuencia() {
    // Le pasas el observador y guardamos lo que devuelve para poder darnos de baja
    this.subscripcionASecuencia = this.servicio.secuencia.subscribe(this.observador);
  }

  desconectarASecuencia() {
    if (this.subscripcionASecuencia) { 
      this.subscripcionASecuencia.unsubscribe();
    }
  }

  conectarAGeoLocation() {
    this.subscripcionGeoLocation = this.servicio.ubicaciones.subscribe(this.observador);
  }

  desconectarGeoLocation (){
    if(this.subscripcionGeoLocation){
      this.subscripcionGeoLocation.unsubscribe();
    }
  }

  conectarADatosConOperadores() {
    // El orden SI importa (dependiendo del operador)
    this.servicio.datos.pipe(
      // Con esto saltamos el primer elemento, no lo consumimos
      skip(1),
      // Filtramos valores
      filter(
        (valor) => {
          return valor >= 30 && valor <= 50
        }
      ),
      // Aplicar operacion a cada elemento
      map(
        (valor) => {
          return valor * 1.21
        }
      )
    ).subscribe(this.observador);
  }
  
}
