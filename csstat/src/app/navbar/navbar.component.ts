import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() toggleGraphsEvent = new EventEmitter<string>();
  @Output() toggleCalculationsEvent = new EventEmitter<string>();
  graphActive: string = "";
  calcActive: string = "active";
  constructor() { }



  ngOnInit(): void {
  }
  toggleGraphs(){
    this.toggleGraphsEvent.emit("");
    this.graphActive="active";
    this.calcActive="";

  }
  toggleCalculations(){
    this.toggleCalculationsEvent.emit("");
    this.graphActive="";
    this.calcActive="active";
  }
}
