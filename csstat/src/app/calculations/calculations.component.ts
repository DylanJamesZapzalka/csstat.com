import { Component, OnInit } from '@angular/core';
import {ClipboardModule} from "@angular/cdk/clipboard";
import{GraphService} from '../graph.service'
import{mean, median, mode, variance, std} from 'mathjs';

@Component({
  selector: 'app-calculations',
  templateUrl: './calculations.component.html',
  styleUrls: ['./calculations.component.css'],
  //providers: [GraphService]
})
export class CalculationsComponent implements OnInit {
  constructor(private graphService: GraphService) { }

  input: number[] = this.graphService.input;
  copyText: string = "";

  calculations: {[key: string]: number}={"mean": 0, "median": 0, "mode": 0,"standard deviation": 0, "variance": 0};
  calculationsChecked: {[key: string]: boolean}={"mean": true, "median": true, "mode": true,"standard deviation": true, "variance": true};


  ngOnInit(): void {
  }

  checkChange(s: string){
    this.ngOnInit();
    if(this.calculationsChecked[s]){
      this.calculationsChecked[s]= false;
    }else{
      this.calculationsChecked[s]= true;
    }

  }

  //this creates a string for the user to copy
  copyResults(){
    for(let k in this.calculations){
      if(this.calculationsChecked[k]){
        //this.copyText.concat(k + ": " + this.calculations[k] + "\n");
      }
    }
  }

 calculate(){
   alert("hi2");
   //mean
   this.calculations["mean"] = mean(this.input);
   this.calculations["median"] = median(this.input);
   this.calculations["mode"] = mode(this.input);
   this.calculations["standard deviation"] = std(this.input);
   this.calculations["variance"] = variance(this.input);

 //  this.calcMean();
  //  this.calcMedian();
  //  this.calcMode();
  //  this.calcStandardDeviation();
  //  this.calcVariance();

  //this.ngOnInit();


  }





  // calcMean(){
  //   this.calculations["mean"] = mean(this.input);
  // }
  // calcMedian(){
  //   this.calculations["median"] = median(this.input);
  // }
  // calcMode(){
  //   this.calculations["mode"] = mode(this.input);
  // }
  // calcStandardDeviation(){
  //   this.calculations["standard deviation"] = std(this.input);

  // }
  // calcVariance(){
  //   this.calculations["variance"] = variance(this.input);

  // }


}
