import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FichaAlumnoComponent } from './ficha-alumno/ficha-alumno.component';
import { TiendaProductosComponent } from './tienda-productos/tienda-productos.component';
import { TiendaAppComponent } from './tienda-app/tienda-app.component';
import { TiendaCarritoComponent } from './tienda-carrito/tienda-carrito.component';
import { TiendaFiltroComponent } from './tienda-filtro/tienda-filtro.component';
import { ProbarEnrutadoComponent } from './probar-enrutado/probar-enrutado.component';
import { TiendaFichaProductoComponent } from './tienda-ficha-producto/tienda-ficha-producto.component';
import { PortalViajesComponent } from './portal-viajes/portal-viajes.component';
import { PortalBuscadorComponent } from './portal-buscador/portal-buscador.component';
import { PortalResultadosComponent } from './portal-resultados/portal-resultados.component';
import { ServicioReservasService } from './servicio-reservas.service';
import { RouterModule } from '@angular/router';
import { FormatoFechaPipe } from './formato-fecha.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FichaAlumnoComponent,
    TiendaProductosComponent,
    TiendaAppComponent,
    TiendaCarritoComponent,
    TiendaFiltroComponent,
    ProbarEnrutadoComponent,
    TiendaFichaProductoComponent,
    PortalViajesComponent,
    PortalBuscadorComponent,
    PortalResultadosComponent,
    FormatoFechaPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule
    // AppRoutingModule
  ],
  // Indicamos que artefactos de este modulo pueden emplear los modulos que lo importen
  exports : [
    FormatoFechaPipe
  ],
  providers: [
    ServicioReservasService
  ],
  bootstrap: [
    //AppComponent
    // FichaAlumnoComponent
    //TiendaAppComponent
    //ProbarEnrutadoComponent
    PortalViajesComponent
  ]
})
export class AppModule { }
