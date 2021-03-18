import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-probar-animaciones',
  templateUrl: './probar-animaciones.component.html',
  styleUrls: ['./probar-animaciones.component.css'],
  animations : [
    // Lo que desencadena la animacion
    trigger(
      "animar",
      // Incoporamos estados y asociamos un estilo
      [
        state("inicio",style(
          {
            height : "40px",
            opacity : 1.0,
            backgroundColor : 'orange'
          }
        )),
        state("final",style(
          {
            height : "40px",
            opacity : 1.0,
            backgroundColor : 'black'
          }
        )),
        // Transiciones (EN ESTE CASO, se indica de que estado a que estado se transiciona y el tiempo a animar)
        transition("inicio => final",
        [
          animate("1s")
        ]),
        transition("final => inicio",
        [
          animate("1s")
        ])
      ]
    )
  ]
})
export class ProbarAnimacionesComponent implements OnInit {

  todoOk : boolean = true;


  constructor() { }

  ngOnInit(): void {
  }

  cambiar() {
    this.todoOk = !this.todoOk;
  }

}
