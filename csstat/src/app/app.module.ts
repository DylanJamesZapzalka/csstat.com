import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ClipboardModule} from "@angular/cdk/clipboard";

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InputComponent } from './input/input.component';
import { GraphsComponent } from './graphs/graphs.component';
import { AddGraphComponent } from './add-graph/add-graph.component';
import { CalculationsComponent } from './calculations/calculations.component';

import { GoogleChartsModule } from 'angular-google-charts';
import { FormsModule } from '@angular/forms';
import { GraphDetailComponent } from './graph-detail/graph-detail.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { GraphService } from './graph.service';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InputComponent,
    GraphsComponent,
    AddGraphComponent,
    CalculationsComponent,
    GraphDetailComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    GoogleChartsModule,
    FormsModule,
    DragDropModule,
    ClipboardModule,
  ],
  providers: [GraphService],
  bootstrap: [AppComponent]
})
export class AppModule { }
