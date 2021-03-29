import { Component, OnInit } from '@angular/core';

import { InputInsertComponent } from '../input-insert/input-insert.component';
import { InputUploadComponent } from '../input-upload/input-upload.component';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
