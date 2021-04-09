import { Component, OnInit } from '@angular/core';
import { GraphService } from '../graph.service';

@Component({
  selector: 'app-add-graph',
  templateUrl: './add-graph.component.html',
  styleUrls: ['./add-graph.component.css']
})
export class AddGraphComponent implements OnInit {

  constructor(private graphService: GraphService) { }

  title: string;
  type: string;
  data: any;

  result: string;
  errors: string;

  array1: any;
  array2: any;
  
  clickCreate(chartName: string, chartType: string, data1: string, data2: string): void{
    this.title = chartName;
    this.type =  chartType;

    this.array1 = data1.split(',');
    this.array2 = data2.split(',');

    this.data = [];
    
    for(let i = 0; i < this.array1.length; i++)
    {
      this.array2[i] = Number(this.array2[i]);
      this.data.push([this.array1[i], this.array2[i]]);
    }

    this.graphService.addGraph(this.title, this.type, this.data);
  }

  ngOnInit(): void {
    this.errors = "None";
    this.title = "Default";
    this.type =  "Default";
  }


}
