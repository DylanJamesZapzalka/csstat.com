import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputService {

  constructor() {}
  input: number[] = [1,2,3,4,5];

  updateInput(data: number[]){
    this.input = data;
  }

  getInput(){
    return this.input;
  }

}
