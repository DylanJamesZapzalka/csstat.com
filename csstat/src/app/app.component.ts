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
  showAbout: boolean = false;
  constructor(){}

  @ViewChild(CalculationsComponent) child:CalculationsComponent;

  calculate(){
    this.child.calculate();
  }
  toggleCalculations(){
    if(!this.showCalculations){
      this.showCalculations = true;
      this.showGraphs=false;
      this.showAbout = false;
    }
  }
  toggleGraphs(){
    if(!this.showGraphs){
      this.showGraphs = true;
      this.showCalculations = false;
      this.showAbout = false;
    }
  }
  toggleAbout(){
    if(!this.showAbout){
      this.showAbout = true;
      this.showCalculations = false;
      this.showGraphs=false;
    }
  }

}
