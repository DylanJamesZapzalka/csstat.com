import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() toggleGraphsEvent = new EventEmitter<string>();
  @Output() toggleCalculationsEvent = new EventEmitter<string>();
  @Output() toggleAboutEvent = new EventEmitter<string>();

  graphActive: string = "active";
  calcActive: string = "";
  aboutActive: string="";
  constructor() { }



  ngOnInit(): void {
  }
  toggleGraphs(){
    this.toggleGraphsEvent.emit("");
    this.graphActive="active";
    this.calcActive="";
    this.aboutActive="";

  }
  toggleCalculations(){
    this.toggleCalculationsEvent.emit("");
    this.graphActive="";
    this.calcActive="active";
    this.aboutActive="";
  }

  toggleAbout(){
    this.toggleAboutEvent.emit("");
    this.graphActive="";
    this.calcActive="";
    this.aboutActive="active";
  }
}
