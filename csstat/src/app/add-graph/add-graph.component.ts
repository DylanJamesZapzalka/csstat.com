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
  
  clickCreate(chartName: string, chartType: string): void{
    this.title = chartName;
    this.type =  chartType;
    this.data = [
      ['Firefox', 45.0],
      ['IE', 26.8],
      ['Chrome', 12.8],
      ['Safari', 8.5],
      ['Opera', 6.2],
      ['Others', 0.7] ]
    
    this.graphService.addGraph(this.title, this.type, this.data);
  }

  ngOnInit(): void {
    this.errors = "None";
    this.title = "Default";
    this.type =  "Default";
  }


}
