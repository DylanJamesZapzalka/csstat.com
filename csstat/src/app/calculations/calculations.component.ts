import { Component, OnInit } from '@angular/core';
import{GraphService} from '../graph.service'
import { ngModuleJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-calculations',
  templateUrl: './calculations.component.html',
  styleUrls: ['./calculations.component.css']
  //providers: [GraphService]
})
export class CalculationsComponent implements OnInit {
  constructor(private graphService: GraphService) { }

  input: number[] = this.graphService.input;
  sum :number = 0;
  mean:number=0;
  median:number=0;
  mode: number=0;
  standardDeviation: number=0;
  variance: number =0;

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

 calculate(){
   alert("hi2");
   //mean
   this.sum=0;
    for(let n of this.input){
      this.sum+=n;
    }
    this.calculations["mean"] = this.sum / this.input.length;

    //this.ngOnInit();


 }
}
