import { Component,Input} from '@angular/core';

@Component({
selector: 'lab4', //tag
  templateUrl: './lab4.component.html', //template path
  styleUrls: ['./lab4.component.css']
})
  
export class Lab4Component {

  items = [1, 2, 3, 4, 5,6,7,8,9,10];
  constructor() { }
 
}