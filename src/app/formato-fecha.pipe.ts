import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoFecha'
})
export class FormatoFechaPipe implements PipeTransform {

  transform(value: Date | string, idioma : string = "es"): string {
    return null;
  }

}
