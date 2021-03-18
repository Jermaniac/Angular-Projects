import { Injectable } from '@angular/core';
import { interval, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProbarObservablesService {

  public datos : Observable<number>;

  public secuencia : Observable<number>;

  public ubicaciones : Observable<any>;

  constructor() { 

    this.datos = of(10, 20, 30, 40, 50 ,60);
    this.secuencia = interval(1000);

    this.ubicaciones = new Observable(

      (observadorDeUbicaciones) => {

        // Guardo las variables de un observable
        const {next, error, complete} = observadorDeUbicaciones;

        // Activamos lectura de ubicaciones del navegador 

        let watchId;

        const onSucces = (pos) => {
          observadorDeUbicaciones.next(pos);
        }

        const onError = (errorObj) => {
          observadorDeUbicaciones.error(errorObj);
        }

        if (navigator.geolocation) {
          watchId = navigator.geolocation.watchPosition(
            onSucces, onError
          );
        }
        else {
          error("El navegador no soporta geolocalizacion o el usuario denego permiso");
        }

        return {
          unsubscribe(){
            navigator.geolocation.clearWatch(watchId);
          }
        }

      }
    );

  }

}
