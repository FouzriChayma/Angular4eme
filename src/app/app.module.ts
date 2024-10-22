import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { Content1Component } from './content1/content1.component';
import { Content2Component } from './content2/content2.component';
import { FooterComponent } from './footer/footer.component';
import { StdComponent } from './std/std.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    Content1Component,
    Content2Component,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StdComponent
  ],
  providers: [],
  bootstrap: [AppComponent] //composant d'entré
})
export class AppModule { }
