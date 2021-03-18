import { Component, OnInit } from '@angular/core';
import { ServicioReservasService } from '../servicio-reservas.service';

@Component({
  selector: 'app-portal-resultados',
  templateUrl: './portal-resultados.component.html',
  styleUrls: ['./portal-resultados.component.css']
})
export class PortalResultadosComponent implements OnInit {

  precioFiltro : number = 100;

  constructor(
    // Se pide la inyeccion del servicio
    public servicioReservas : ServicioReservasService
  ) { }

  ngOnInit(): void {
  }

}
