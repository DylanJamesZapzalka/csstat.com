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
  data: number[] = [0];


  ngOnInit(): void {
  }

  enterData(){
    //get the data from the text area and delimit
    this.dataString = ((<HTMLTextAreaElement>document.getElementById("textAreaInput")).value).split(",")
    //turn the data into an int array
    for(let i =0; i<this.dataString.length; i++){
      this.data[i] = Number(this.dataString[i]);
    }
    //this.dataInputEvent.emit(this.data);
    this.inputService.updateInput(this.data);

    //reset the data for the next run
    this.data = [0];

    this.inputButtonEvent.emit("hi");
  }

}
