import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'  
})
export class MainPageComponent {

  tittle = "MainPageComponent"

  //Centralizar los datos por eso se manda a servicio para que este todo en un mismo lugar como un Singleton
  // personajes: Personaje[] = [
  //   {
  //     nombre: 'Goku',
  //     poder:15000
  //   },
  //   {
  //     nombre: 'Vegeta',
  //     poder:8000
  //   }
  // ];

  constructor(private dbzService: DbzService){ }

  nuevo:Personaje = {
    nombre: '',
    poder: 0
  };

  get personajes():Personaje[]{
    return this.dbzService.personajes;
  }

  agregarNuevoPersonaje(per: Personaje){
    this.personajes.push(per);
  }
  


}
