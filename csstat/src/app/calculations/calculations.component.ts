import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculations',
  templateUrl: './calculations.component.html',
  styleUrls: ['./calculations.component.css']
})
export class CalculationsComponent implements OnInit {
  //calculations: string[] = [];
  results: number[] = [12, 123, 22, 5.78, 12, 123, 22, 5.78];
  calculations: {[key: string]: number}={"mean": 1, "median": 4, "mode": 2.3,"standard deviation": 4, "variance": 0,"p-value": 6,"correlation between parameters": 8, "percentile of point": 0};
  calculationsChecked: {[key: string]: boolean}={"mean": false, "median": true, "mode": true,"standard deviation": true, "variance": true,"p-value": true,"correlation between parameters": true, "percentile of point": true};
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
