import { Component, OnInit } from '@angular/core';
import { Graph } from '../graph';
import { GraphService } from '../graph.service';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})
export class GraphsComponent implements OnInit {

  constructor(private graphService: GraphService) { }

  graphs: Graph[] = this.graphService.graphs;

  

  ngOnInit(): void {

  }

  

}
