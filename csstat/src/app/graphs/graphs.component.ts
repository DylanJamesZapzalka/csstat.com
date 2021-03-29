import { Component, OnInit } from '@angular/core';
import { Graph } from '../graph';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})
export class GraphsComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
