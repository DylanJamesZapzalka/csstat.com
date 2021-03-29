import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GraphsComponent } from './graphs/graphs.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GraphsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
