import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import{CalculationsComponent} from '../calculations/calculations.component';

import{GraphService} from '../graph.service'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
  //providers: [GraphService]
})
export class InputComponent implements OnInit {
  constructor(private inputService: GraphService) { }

  @Output() inputButtonEvent = new EventEmitter<string>();

  dataString: string[] = [""];
  data: number[] = [];
  nanPositions: number[] = [];


  ngOnInit(): void {
  }

  enterData(){
    //get the data from the text area and delimit
    this.dataString = ((<HTMLTextAreaElement>document.getElementById("textAreaInput")).value).split(/[\s,]+/);

    //turn the data into an int array
    for(let i =0; i<this.dataString.length; i++){
      if ( !Number.isNaN(Number(this.dataString[i])) ){   //check for NaN error
        this.data[i] = Number(this.dataString[i]);
      }else{                                              // if NaN, splice the array so a zero isnt included which would mess up the data
        this.nanPositions.push(i);               //remember the positions of the NaN's
      }
    }

    //this loop cleans up all the zeros from possible NaN errors
    for(let i =0; i<this.nanPositions.length; i++){
        this.data.splice(this.nanPositions[i], 1);

    }

    //this.dataInputEvent.emit(this.data);
    this.inputService.updateInput(this.data);

    //reset the data for the next run
    this.data = [];

    this.inputButtonEvent.emit("hi");
  }

}
