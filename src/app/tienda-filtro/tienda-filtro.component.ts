import { Component, Input, OnInit } from '@angular/core';
import { ConfiguracionFiltro } from '../entidades/configuracionfiltro';
import { Producto } from '../entidades/producto';

@Component({
  selector: 'app-tienda-filtro',
  templateUrl: './tienda-filtro.component.html',
  styleUrls: ['./tienda-filtro.component.css']
})
export class TiendaFiltroComponent implements OnInit {

  @Input()
  config : ConfiguracionFiltro = new ConfiguracionFiltro(["Juegos"],0,1000,0,1000);

  @Input()
  catalogo : Producto[] = [];

  @Input()
  filtrado : {
    catalogoFiltrado : Producto[]
  } = {catalogoFiltrado : [] };

  /////

  // No necesario poner la primera categoria (podria estar vacio)
  categoria : string = this.config.categorias[0];

  precioMinimo: number = this.config.rangoMinInicial;

  precioMaximo : number = this.config.rangoMaxFinal;

  constructor() { }

  ngOnInit(): void {
  }

  // Metodo para darle funcionalidad al boton
  aplicarFiltro(){
    this.filtrado.catalogoFiltrado = this.catalogo.filter(
      (producto : Producto) => {
        return producto.precioUnidad >= this.precioMinimo && producto.precioUnidad<=this.precioMaximo
      }
    );
    
  }

}
