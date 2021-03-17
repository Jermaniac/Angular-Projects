import { Component, OnInit } from '@angular/core';
import { Alumno } from '../alumno';

@Component({
  selector: 'app-ficha-alumno',
  templateUrl: './ficha-alumno.component.html',
  styleUrls: ['./ficha-alumno.component.css']
})
export class FichaAlumnoComponent implements OnInit {

  // TypeScript es compatible con EC6 (ecmascript6)

  // Modelo -> datos que maneja el componente

  mensaje : string = "Componente para empezar con Angular";

  unAlumno : Alumno = new Alumno("12345678A", "German", "Gonzalez", "correofalso@gmail.com");

  tituloDelCorreo : string = "";

  textoDelCorreo : string = "";

  nifDelAlumnoSeleccionado : string = "";

  listaAlumnos :  Alumno[] = [
    new Alumno("12345678A", "German", "Gonzalez", "correofalso@gmail.com"),
    new Alumno("12345678B", "German2", "Gonzalez2", "correofalso2@gmail.com"),
    new Alumno("12345678C", "German3", "Gonzalez3", "correofalso3@gmail.com")
  ];

  constructor() { }

  ngOnInit(): void {
  }

  crearAlumno() {
    this.listaAlumnos.push(
      new Alumno("12345678Z", "GermanLast", "GonzalezLast", "correofalsolast@gmail.com")
    );
  }

  borrarAlumnos() {
    this.listaAlumnos = [];
  }

  filaPulsada(nifDelAlumno : string){
    this.nifDelAlumnoSeleccionado = nifDelAlumno;
    
  }

}
