import { Component } from '@angular/core';
import{InputService} from './input.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [InputService]
})
export class AppComponent {
  title = 'csstat';
  constructor(inputService: InputService){}
}
