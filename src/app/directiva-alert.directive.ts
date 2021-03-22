import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    // este es el identificador de la directiva cuando lo usemos (lo usamos en html)
  selector: '[alerta]'
})
export class DirectivaAlertDirective {

  fuente : string = "";
  constructor(
    // Para poder referenciar el elemento al que han aplicado la directiva
    private elementoHTML : ElementRef
  ) { 

    this.fuente = this.elementoHTML.nativeElement.style.fontSize;

    this.elementoHTML.nativeElement.setAttribute("class", "alert alert-danger");
  }

  @HostListener("mouseenter")
  entraElRaton(){
    this.elementoHTML.nativeElement.style.fontSize = "24pt";
  }

  @HostListener("mouseleave")
  saleElRaton() {
    this.elementoHTML.nativeElement.style.fontSize = this.fuente;
  }

}
