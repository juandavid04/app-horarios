export class Asignatura{
    nombre: String = ""
    grupos= new Map();

    constructor(nombre: string){
        this.nombre = nombre;
    }
}