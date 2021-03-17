import { Component, OnInit } from '@angular/core';
import { CarritoCompra } from '../entidades/carritocompra';
import { ConfiguracionFiltro } from '../entidades/configuracionfiltro';
import { Producto } from '../entidades/producto';

@Component({
  selector: 'app-tienda-app',
  templateUrl: './tienda-app.component.html',
  styleUrls: ['./tienda-app.component.css']
})
export class TiendaAppComponent implements OnInit {

  catalogoDeProductos : Producto[] = [];

  datos : {
    catalogoFiltrado : Producto[]
  } = {catalogoFiltrado : [] };

  configFiltroInicial : ConfiguracionFiltro = new ConfiguracionFiltro(
    ["Juegos","Libros","Electronica"],
    0,
    200,
    100,
    1000
  );

  elCarrito : CarritoCompra = new CarritoCompra();

  constructor() { }

  ngOnInit(): void {
    // Para simular catalogo
    for(let i = 1;i<=10;i++){
      this.catalogoDeProductos.push(
        new Producto(
          "Producto "+i,
          "Descripcion del producto "+ i,
          Math.random() *500.0,
          (i%5==0)? false:true
        )
      );

    }

    this.datos.catalogoFiltrado = this.catalogoDeProductos;

  }

}
