import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  // este es el identificador de la directiva cuando lo usemos (lo usamos en html)
  selector: '[nif]',
  // para que funcione es necesario providers (lo pide el api de validaciones)
  providers : [
    {
      provide : NG_VALIDATORS,
      // se puede usar mas de una vez
      multi : true,
      // indicar la clase que respalda al validador (en este caso es la misma clase que estamos)
      useExisting : ValidarNifDirective
    }
  ]
})
// Para poder hacer validaciones hay que implementar Validator, lo que significa implementar dos metodos: validate y registerOnValidatorChange
export class ValidarNifDirective implements Validator{

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    // la variable control incluye el valor del nif que se esta capturando
    // usamos una expresion regular y el metodo test para validar
    const ok = /^\d{8}[A-Z]$/.test(control.value);

    // si devolvemos nulo no hay errores de validacion, si si que hay errores devolvemos un objeto que tenga las propiedades asociadas al error 
    return ok ? null : {nif : { value : control.value}};

  }

  registerOnValidatorChange?(fn: () => void): void {
  }

}
