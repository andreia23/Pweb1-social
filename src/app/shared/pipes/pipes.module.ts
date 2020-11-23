import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LetraMaiusculaPipe} from './letra-maiuscula.pipe';
import { CpfPipe } from './cpf.pipe';
import { TelefonicoPipe } from './telefonico.pipe';



@NgModule({
  declarations: [LetraMaiusculaPipe, CpfPipe, TelefonicoPipe],
  imports: [
    CommonModule
  ],
    exports: [
        LetraMaiusculaPipe,
        CpfPipe,
        TelefonicoPipe
    ]
})
export class PipesModule { }
