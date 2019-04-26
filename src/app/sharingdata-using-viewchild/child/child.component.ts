import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class Child1Component implements OnInit {

  message:string="Hello, i am doin good";

  constructor() { }

  ngOnInit() {
  }

}