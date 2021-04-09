import { Injectable } from '@angular/core';
import { Graph } from './graph';

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  constructor() {}

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

  addGraph(title: string, type: string, data: any): void {
    this.graphs.push({"title": title,
    "type": type, 
    "data": data,
      "columnNames": ['Browser', 'Percentage'],
      "options": {},
      "width": 550,
      "height": 400
    })

  }


}
