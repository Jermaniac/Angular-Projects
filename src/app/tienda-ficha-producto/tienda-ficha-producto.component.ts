import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../entidades/producto';

@Component({
  selector: 'app-tienda-ficha-producto',
  templateUrl: './tienda-ficha-producto.component.html',
  styleUrls: ['./tienda-ficha-producto.component.css']
})
export class TiendaFichaProductoComponent implements OnInit {

  producto : Producto = new Producto("","",0.0);

  constructor(
    private ruta : ActivatedRoute, // Servicio para interactuar con el enrutado
    public location : Location // Servicio para cambiar la navegacion
  ) { }

  ngOnInit(): void {

    this.ruta.paramMap.subscribe(
      (parametrosDeLaRuta) => {

        let idDelProducto = parametrosDeLaRuta.get("id");
        // Habria que consultar por id del producto el modelo de datos
        // ....
        this.producto = new Producto("Busqueda por enlace "+ idDelProducto,"Resultado calculado...",800.0);
        this.producto.id = parseInt(idDelProducto ? idDelProducto : "0");
      }

    )
  }

}
