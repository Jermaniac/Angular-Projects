import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../entidades/cliente';
import { GestionClientesService } from '../gestion-clientes.service';

@Component({
  selector: 'app-gestion-clientes',
  templateUrl: './gestion-clientes.component.html',
  styleUrls: ['./gestion-clientes.component.css']
})
export class GestionClientesComponent implements OnInit {

  clientes : Cliente[] = [];

  errorEnLlamadaServicioREST : boolean = false;

  mensajeDeError : string = "";

  constructor(
    public servicioClientes : GestionClientesService
  ) { }

  ngOnInit(): void {
  }

  cargarClientes () {
    this.servicioClientes.consultarTodosLosClientes().subscribe(
      //Para recibir la respuesta
      ( datos: Cliente[]) => {
        this.clientes = datos;
        this.errorEnLlamadaServicioREST = false;
      },
      // Para procesar errores
      (error : HttpErrorResponse) => {
        this.errorEnLlamadaServicioREST = true;
        switch (error.status) {
          case 404:
            this.mensajeDeError = "No hay clientes en el servidor: 404";
            break;
          case 500:
            this.mensajeDeError = "Servicio de clientes con error: 500";
            break;
          default:
            this.mensajeDeError = "Error desconocido: ?";
            break;
        }
      },
      // Para indicar que ha terminado la ejecucion
      () => {
        console.log("Servicio Clientes invocado");
      }
    );
  }

}
