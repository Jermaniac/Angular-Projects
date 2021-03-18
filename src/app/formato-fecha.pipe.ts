import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoFecha'
})
export class FormatoFechaPipe implements PipeTransform {

  // {{trayecto.fecha | formatoFecha:'es'}}
  transform(value: Date, idioma : string = "es"): string {

    let cadena : string = `Idioma no soportado ${idioma} para fecha ${value}`;

    switch (idioma) {
      case 'es':
        cadena = `${value.getDate()}/${value.getMonth() + 1}/${value.getFullYear()}`;
        break;

      case 'en':
        cadena = `${value.getMonth() + 1}/${value.getDate()}/${value.getFullYear()}`;
        break;

      default:
        break;
        
    }
    return cadena;
  }

}
