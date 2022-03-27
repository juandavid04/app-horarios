import { Component, OnInit } from '@angular/core';
import { Asignatura } from '../asignatura.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  nombre: string = "";

  asignaturas: Asignatura[] = Array();

  hidden = true;

  constructor() { }

  agregar(){
    if(!this.buscarRepetidos(this.nombre)){
      this.asignaturas.push(new Asignatura(this.nombre))
    }else{
      alert('La Asignatura ya fue agregada');
    }
    
  }

  buscarRepetidos(nombre: string){
    let repetido = false;
    this.asignaturas.forEach(element => {
      if(element.nombre == nombre){
        repetido = true;
      }
    })
    return repetido;
  }

  esconder(){
    if(this.hidden){
      this.hidden = false;
    }else{
      this.hidden = true;
    }
  }

  ngOnInit(): void {
  }

}
