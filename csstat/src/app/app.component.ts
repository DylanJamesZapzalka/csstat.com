import { Component, ViewChild } from '@angular/core';
import { CalculationsComponent } from './calculations/calculations.component';
//import { CalculationsComponent } from './calculations/calculations.component';
//import { InputComponent } from './input/input.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  title = 'csstat';
  constructor(){}

  @ViewChild(CalculationsComponent) child:CalculationsComponent;

  calculate(){
    alert("hi1");
    this.child.calculate();


  }

}
