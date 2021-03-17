import { Component, OnInit } from '@angular/core';
import { Trayecto } from '../entidades/trayecto';
import { ServicioReservasService } from '../servicio-reservas.service';

@Component({
  selector: 'app-portal-buscador',
  templateUrl: './portal-buscador.component.html',
  styleUrls: ['./portal-buscador.component.css']
})
export class PortalBuscadorComponent implements OnInit {

  origen : string = this.servicioReservas.ciudades[1];

  destino : string = this.servicioReservas.ciudades[0];

  fecha : string = "2021-03-17";

  constructor(
    // Pedimos que se inyecte el servicio que se ha creado
    public servicioReservas : ServicioReservasService
  ) { }

  ngOnInit(): void {
  }

  hacerBusqueda(){
    this.servicioReservas.datos.billetes = this.servicioReservas.datosTrayectos.filter(
      (trayecto: Trayecto) => {
        // No entrega la fecha de momento
        return trayecto.origen == this.origen && trayecto.destino == this.destino;
      }
    );
  }

}
