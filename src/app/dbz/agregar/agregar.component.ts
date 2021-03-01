import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'  
})
export class AgregarComponent{

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  };

  //@Input() personajes: Personaje[] = []; //? Se Elimina de propiedad ya que el no debe de procesar el arreglo
  @Output() onNvoPersonaje: EventEmitter<Personaje> = new EventEmitter();

   //? Para prevenir el refrescado general  y pasar el evento
  // Agregar( event:any ){
  //   event.preventDefault();
  //   console.log("Agregar metodo.")
  // }

  agregar(){
    // if(this.nuevo.nombre.trim().length === 0){
    //   return;
    // }
    console.log(this.nuevo)

    //this.personajes.push(this.nuevo); //?El no debe de tener esta logica solo el que se esta agregando
    this.onNvoPersonaje.emit(this.nuevo);

    this.nuevo ={
      nombre:'',
      poder: 0
    }
    //console.log(this.personajes);

  }

  cambiarNombre(event: any){
    console.log(event.target.value);
  }

}
