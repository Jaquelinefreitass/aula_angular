
import { NgModule } from "@angular/core";
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';

@NgModule({


    exports:[
        ButtonModule,
        InputTextModule,
        KeyFilterModule
    ]
})


export class PrimeNGModule { }