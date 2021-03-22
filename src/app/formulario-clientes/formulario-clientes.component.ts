import { Component, OnInit } from '@angular/core';
import { Cliente } from '../entidades/cliente';
import { GestionClientesService } from '../gestion-clientes.service';

@Component({
  selector: 'app-formulario-clientes',
  templateUrl: './formulario-clientes.component.html',
  styleUrls: ['./formulario-clientes.component.css']
})
export class FormularioClientesComponent implements OnInit {

  cliente : Cliente = {
    //id : -1,
    nif : "",
    nombre : "",
    apellidos : "",
    correo : "",
    provincia : ""
  }


  constructor(
    public servicio : GestionClientesService
  ) { }

  ngOnInit(): void {
  }

  darDeAlta(){
    // Siempre suscribirnos para hacer llamadas rest
    this.servicio.darAlta(this.cliente).subscribe(
      (respuestaOk) => {
        console.log("Cliente creado OK ...");
        console.log(respuestaOk);
      },
      (respuestaKo) => {
        console.log("Cliente no creado");
        console.log(respuestaKo);
      }
    );
  }

}
