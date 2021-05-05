import { Component, OnInit } from '@angular/core';
import {ClipboardModule} from "@angular/cdk/clipboard";
import{GraphService} from '../graph.service'
import{mean, median, mode, variance, std, sum, min, max} from 'mathjs';

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
  truncate: boolean = true;
  decimalPlaces: number=4;
  roundParam: number = Math.pow(10, this.decimalPlaces);
  modeList: number[] = [];

  calculations: {[key: string]: number}={"sum":0,"min":0,"max":0, "mean": 0, "median": 0, "mode": 0,"standard deviation": 0, "variance": 0};
  calculationsTruncated: {[key: string]: number}={"sum":0,"min":0,"max":0, "mean": 0, "median": 0, "mode": 0,"standard deviation": 0, "variance": 0};
  calculationsChecked: {[key: string]: boolean}={"min":true,"max":true,"sum":true, "mean": true, "median": true, "mode": true,"standard deviation": true, "variance": true};


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

  //this will update the string to copy the results to the users clipboard
  copyResults(){
    this.copyText = "";
    for(let k in this.calculations){
      if(this.truncate){
        if(this.calculationsChecked[k]){
          this.copyText = this.copyText.concat(k + ": " + this.calculationsTruncated[k] + "\n");
        }
      }else{
          if(this.calculationsChecked[k]){
            this.copyText = this.copyText.concat(k + ": " + this.calculations[k] + "\n");
          }
      }

    }

    //document.getElementById("hiddenCopyText").innerHTML=this.copyText;


  }


 calculate(){
   //mean
   this.calculations["min"] = min(this.input);
   this.calculations["max"] = max(this.input);
   this.calculations["sum"] = sum(this.input);
   this.calculations["mean"] = mean(this.input);
   this.calculations["median"] = median(this.input);
   this.calculations["mode"] = mode(this.input);
   this.calculations["standard deviation"] = std(this.input);
   this.calculations["variance"] = variance(this.input);

   this.roundParam = Math.pow(10, this.decimalPlaces);
   this.calculationsTruncated["min"] = Math.round( min(this.input) * this.roundParam)/this.roundParam;
   this.calculationsTruncated["max"] = Math.round( max(this.input) * this.roundParam)/this.roundParam;
   this.calculationsTruncated["sum"] = Math.round( sum(this.input) * this.roundParam)/this.roundParam;
   this.calculationsTruncated["mean"] = Math.round( mean(this.input) * this.roundParam)/this.roundParam;
   this.calculationsTruncated["median"] = Math.round( median(this.input) * this.roundParam)/this.roundParam;

   this.modeList = mode(this.input);
   for(var i = 0; i < this.modeList.length; i++){
      this.modeList[i] = Math.round( this.modeList[i] * this.roundParam)/this.roundParam;
   }
   //this.calculationsTruncated["mode"] = this.modeList;
   this.calculationsTruncated["standard deviation"] = Math.round( std(this.input) * this.roundParam)/this.roundParam;
   this.calculationsTruncated["variance"] = Math.round( variance(this.input) * this.roundParam)/this.roundParam;

   //update the results to copy
   this.copyResults();
  }

  toggleTruncate(){
    if(this.truncate){
      this.truncate=false;
    }else{
      this.truncate=true;
    }
  }

}
