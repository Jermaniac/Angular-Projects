import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FichaAlumnoComponent } from './ficha-alumno/ficha-alumno.component';
import { TiendaAppComponent } from './tienda-app/tienda-app.component';
import { TiendaFichaProductoComponent } from './tienda-ficha-producto/tienda-ficha-producto.component';

const routes: Routes = [
  {
    path : "angular",
    component : AppComponent
  },
  {
    path : "alumno",
    component : FichaAlumnoComponent
  },
  {
    path:"tienda",
    component : TiendaAppComponent
  },
  {
    path : "producto/:id",
    component : TiendaFichaProductoComponent
  },
  // Indica el componente de inicio
  {
    path:"",
    redirectTo : "/tienda",
    pathMatch :"full"
  },
  // Indica la ruta por defecto al navegar a una que no exista
  {
    path:"**",
    redirectTo : "/tienda",
    pathMatch :"full"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
