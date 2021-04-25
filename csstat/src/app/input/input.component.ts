import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import{CalculationsComponent} from '../calculations/calculations.component';
import{InputService} from '../input.service'
import{GraphService} from '../graph.service'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [InputService, GraphService]
})
export class InputComponent implements OnInit {
  constructor(private inputService: GraphService) { }
  dataString: string[] = [""];
  data: number[] = [0];
  //@Output() dataInputEvent = new EventEmitter<number[]>();


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

  }

}
