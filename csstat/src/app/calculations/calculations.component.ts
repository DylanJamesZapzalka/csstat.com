import { Component, OnInit } from '@angular/core';
import{InputService} from '../input.service'
import{GraphService} from '../graph.service'
import { ngModuleJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-calculations',
  templateUrl: './calculations.component.html',
  styleUrls: ['./calculations.component.css'],
  providers: [InputService,GraphService]
})
export class CalculationsComponent implements OnInit {
  constructor(private inputService: GraphService) { }
  input: number[] = this.inputService.getInput();
  sum :number = 0;
  results: number[] = [0,0,0,0,0];
  calculations: {[key: string]: number}={"mean": this.results[0], "median": this.results[1], "mode": this.results[2],"standard deviation": this.results[3], "variance": this.results[4]};
  calculationsChecked: {[key: string]: boolean}={"mean": true, "median": true, "mode": true,"standard deviation": true, "variance": true};


  ngOnInit(): void {
    this.input = this.inputService.getInput();
    this.calculate();
  }

  checkChange(s: string){
    if(this.calculationsChecked[s]){
      this.calculationsChecked[s]= false;
    }else{
      this.calculationsChecked[s]= true;
    }
    this.calculate();
    this.ngOnInit();
 }

 calculate(){
    for(let n of this.input){
      this.sum+=n;
    }


    this.results[1] = this.sum / this.input.length;
 }
}
