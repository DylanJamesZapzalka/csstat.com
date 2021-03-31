import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculations',
  templateUrl: './calculations.component.html',
  styleUrls: ['./calculations.component.css']
})
export class CalculationsComponent implements OnInit {
  //calculations: string[] = [];
  results: number[] = [12, 123, 22, 5.78, 12, 123, 22, 5.78];
  calculations: {[key: string]: number}={"mean": this.results[0], "median": this.results[1], "mode": this.results[2],"standard deviation": this.results[3], "variance": this.results[4],"p-value": this.results[5],"correlation between parameters": this.results[6], "percentile of point": this.results[7]};
  calculationsChecked: {[key: string]: boolean}={"mean": true, "median": true, "mode": true,"standard deviation": true, "variance": true,"p-value": true,"correlation between parameters": true, "percentile of point": true};
  constructor() { }

  ngOnInit(): void {
  }

  checkChange(s: string){
    if(this.calculationsChecked[s]){
      this.calculationsChecked[s]= false;
    }else{
      this.calculationsChecked[s]= true;
    }
 }
}
