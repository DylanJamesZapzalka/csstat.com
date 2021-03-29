import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculations',
  templateUrl: './calculations.component.html',
  styleUrls: ['./calculations.component.css']
})
export class CalculationsComponent implements OnInit {
  calculations: string[] = ["mean", "median", "mode","standard deviation", "variance","p-value","correlation between parameters", "percentile of point"];
  constructor() { }

  ngOnInit(): void {
  }

}
