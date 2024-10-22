import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module2RoutingModule } from './module2-routing.module';
import { StdComponent } from '../std/std.component';
import { Acc2Component } from './acc2/acc2.component';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'; // Importer FormsModule pour utiliser ngModel


@NgModule({
  declarations: [
    Acc2Component
  ],
  imports: [
    CommonModule,
    Module2RoutingModule,
    BrowserModule,
    StdComponent,
    FormsModule
  ],
  bootstrap: [Acc2Component] //composant d'entré

})
export class Module2Module { }
