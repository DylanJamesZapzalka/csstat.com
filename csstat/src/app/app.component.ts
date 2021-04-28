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
  showGraphs: boolean = true;
  showCalculations: boolean = false;
  constructor(){}

  @ViewChild(CalculationsComponent) child:CalculationsComponent;

  calculate(){
    alert("hi1");
    this.child.calculate();
  }
  toggleCalculations(){
    if(!this.showCalculations){
      this.showCalculations = true;
      this.showGraphs=false;
    }
  }
  toggleGraphs(){
    if(!this.showGraphs){
      this.showGraphs = true;
      this.showCalculations = false;
    }
  }

}
