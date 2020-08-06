import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-list',
  templateUrl: './my-list.component.html' ,
  styleUrls: ['./my-list.component.css']
})
export class MylistComponent  {
  @Input() name: string;

  constructor() {
    this.name = "gisela";
  }

}
