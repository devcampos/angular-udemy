import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador/contador.component';

@NgModule({
    declarations:[//? Lo que contiene  este modulo
        ContadorComponent
    ],
    exports:[// ? Lo que quiero que se vea
        ContadorComponent
    ]
})

export class ContadorModule{

}