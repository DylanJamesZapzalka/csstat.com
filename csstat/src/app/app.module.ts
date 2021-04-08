import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InputComponent } from './input/input.component';
import { InputInsertComponent } from './input-insert/input-insert.component';
import { InputUploadComponent } from './input-upload/input-upload.component';
import { GraphsComponent } from './graphs/graphs.component';
import { AddGraphComponent } from './add-graph/add-graph.component';
import { CalculationsComponent } from './calculations/calculations.component';

import { GoogleChartsModule } from 'angular-google-charts';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InputComponent,
    InputInsertComponent,
    InputUploadComponent,
    GraphsComponent,
    AddGraphComponent,
    CalculationsComponent,
  ],
  imports: [
    BrowserModule,
    GoogleChartsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
