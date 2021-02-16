import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations:[//? Lo que contiene  este modulo
        HeroeComponent,
        ListadoComponent
    ],
    exports:[// ? Lo que quiero que se vea
        ListadoComponent
    ],
    imports:[//? Aqui van los modulos
        CommonModule
    ]
})

export class HeroesModule{

}