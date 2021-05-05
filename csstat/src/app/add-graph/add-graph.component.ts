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

  options: any;

  is3D: Boolean;
  columnNames: any;
  data1Name: string;
  data2Name: string;
  
  clickCreate(chartName: string, chartType: string, data1: string, data2: string): void{
    this.title = chartName;
    this.type =  chartType;

    this.array1 = data1.split(',');
    this.array2 = data2.split(',');

    this.data = [];
    this.columnNames = [];

    

    if(this.type == "PieChart") {
        for(let i = 0; i < this.array1.length; i++)
        {
          this.array2[i] = Number(this.array2[i]);
          this.data.push([this.array1[i], this.array2[i]]);
        }
        if(this.is3D){
            this.options = {is3D: true};
        }
        else{
            this.options = {};
        }
    }
    else
    {

        this.columnNames = [this.data1Name, this.data2Name];
        if(Number.isNaN((Number(this.array1[0]))))
        {
            for(let i = 0; i < this.array1.length; i++)
            {
              this.array2[i] = Number(this.array2[i]);
              this.data.push([this.array1[i], this.array2[i]]);
            }
        }
        else
        {

            for(let i = 0; i < this.array1.length; i++)
            {
              this.array1[i] = Number(this.array1[i]);
              this.array2[i] = Number(this.array2[i]);
              this.data.push([this.array1[i], this.array2[i]]);
            }
        }

        if(this.type == 'BarChart')
        {
            this.options = {hAxis: {title: this.data1Name}, vAxis: {title: this.data2Name}}
        }
        else if(this.type == 'Histogram'){
            this.columnNames = ['', ''];
        }
        else{
            this.options = {hAxis: {title: this.data1Name}, vAxis: {title: this.data2Name}};
        }
        
    }

    this.graphService.addGraph(this.title, this.type, this.data, this.options, this.columnNames);
  }

  change3d(): void {
      this.is3D = !this.is3D;
  }

  data1NameChange(data1Name: string): void {
      this.data1Name = data1Name;
  }

  data2NameChange(data2Name: string): void {
    this.data2Name = data2Name;
}

  ngOnInit(): void {
    this.errors = "None";
    this.title = "Default";
    this.type =  "Default";
  }


}
