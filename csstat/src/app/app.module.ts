import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
<<<<<<< HEAD
import { InputComponent } from './input/input.component';
import { InputInsertComponent } from './input-insert/input-insert.component';
import { InputUploadComponent } from './input-upload/input-upload.component';
=======
import { GraphsComponent } from './graphs/graphs.component';
>>>>>>> ce08e4e653f92772f8166bf6d7719a93c152675a

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
<<<<<<< HEAD
    InputComponent,
    InputInsertComponent,
    InputUploadComponent
=======
    GraphsComponent
>>>>>>> ce08e4e653f92772f8166bf6d7719a93c152675a
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
