import { Component, Input, OnInit } from '@angular/core';
import { CarritoCompra, Compra } from '../entidades/carritocompra';
import { Producto } from '../entidades/producto';

@Component({
  selector: 'app-tienda-productos',
  templateUrl: './tienda-productos.component.html',
  styleUrls: ['./tienda-productos.component.css']
})
export class TiendaProductosComponent implements OnInit {

  // Se puede usar desde un componente padre con @Input
  @Input()
  catalogo : Producto[] = [];

  @Input()
  carrito : CarritoCompra = new CarritoCompra();

  constructor() { }

  ngOnInit(): void {
  }

  comprarProducto (producto : Producto){
    this.carrito.guardarCompra(new Compra(producto,1));
  }

}
