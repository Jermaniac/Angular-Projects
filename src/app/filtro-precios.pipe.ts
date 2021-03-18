import { Pipe, PipeTransform } from '@angular/core';
import { Trayecto } from './entidades/trayecto';

@Pipe({
  name: 'filtroPrecios'
})
export class FiltroPreciosPipe implements PipeTransform {

  // *ngFor="let trayecto of (servicioReservas.datos.billetes | filtroPrecios:200)"

  transform(datos: Trayecto[], precioMaximo: number): Trayecto[] {

    return datos.filter(
      (trayecto : Trayecto) => {
        return trayecto.precio <= precioMaximo;
      }
    );
  }

}
