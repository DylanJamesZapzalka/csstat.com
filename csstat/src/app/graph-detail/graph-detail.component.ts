import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { Graph } from '../graph';
import { GraphService } from '../graph.service';



@Component({
  selector: 'app-graph-detail',
  templateUrl: './graph-detail.component.html',
  styleUrls: ['./graph-detail.component.css']
})
export class GraphDetailComponent implements OnInit {

  constructor(private graphService: GraphService) { }

  graphs: Graph[] = this.graphService.graphs;

  delete(graph: Graph) {
    this.graphService.deleteGraph(graph);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.graphs, event.previousIndex, event.currentIndex);
  }

  ngOnInit(): void {
  }

}
