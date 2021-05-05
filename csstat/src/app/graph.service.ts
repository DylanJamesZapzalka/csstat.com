import { Injectable } from '@angular/core';
import { Graph } from './graph';

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  constructor() {}
  input: number[] = [0];



  graphs: Graph[] = [
    {"title": "Default Example Chart",
    "type": "PieChart",
    "data": [
      ['Firefox', 45.0],
      ['IE', 26.8],
      ['Chrome', 12.8],
      ['Safari', 8.5],
      ['Opera', 6.2],
      ['Others', 0.7] ],
      "columnNames": ['Browser', 'Percentage'],
      "options": {is3D: true},
      "width": 550,
      "height": 400
    }
  ];



  getGraphs(): Graph[] {
    return this.graphs;
  }

  addGraph(title: string, type: string, data: any, options: any, columnNames: any): void {
      if(type == 'PieChart'){
        this.graphs.push({"title": title,
        "type": type,
        "data": data,
          "columnNames": ['Browser', 'Percentage'],
          "options": options,
          "width": 550,
          "height": 400
        })
      }
      else{
        this.graphs.push({"title": title,
        "type": type,
        "data": data,
          "columnNames": columnNames,
          "options": options,
          "width": 550,
          "height": 400
        })
      }

  }

  deleteGraph(graph: Graph) {
    let index = this.graphs.indexOf(graph);
    this.graphs.splice(index, 1);
  }

  updateInput(data: number[]){
    for(let i =0; i<data.length; i++){
      this.input[i]=data[i];
    }


  }

  getInput(){
    return this.input;
  }


}
