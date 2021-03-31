import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-graph',
  templateUrl: './add-graph.component.html',
  styleUrls: ['./add-graph.component.css']
})
export class AddGraphComponent implements OnInit {

  chartName: string;
  chartType: string;
  data: any;
  errors: string;
  
  clickCreate(chartName: string){
    this.errors = chartName;
  }

  ngOnInit(): void {
  }

  constructor() { }
}
