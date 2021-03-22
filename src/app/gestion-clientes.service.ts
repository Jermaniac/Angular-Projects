import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from './entidades/cliente';

@Injectable({
  providedIn: 'root'
})
export class GestionClientesService {

  // Aqui colocamos la url a llamar
  readonly urlBase : string = "http://localhost:3000/clientes";

  readonly opciones = {
    headers : new HttpHeaders (
      {
        "Content-Type" : "application/json",
        "AuthenticationToken" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789"
      }
    )
  }

  constructor(
    private httpCliente : HttpClient
  ) { }

  darAlta (cliente : Cliente) {
    // Esto devuelve un Observable
    return this.httpCliente.post(
      this.urlBase,
      cliente,
      // En este caso no es necesario, pero voy a pasar cabeceras
      this.opciones
    );
  }
  borrarCliente(cliente : Cliente){
    // Hay que poner la url junto con el identificador cliente
    return this.httpCliente.delete(
      `${this.urlBase}/${cliente.id}`
    );
  }

  consultarTodosLosClientes () {
    return this.httpCliente.get(
      this.urlBase,
      {
        headers : {
          "Accept" : "application/json"
        }
      }
    );
  }
}
