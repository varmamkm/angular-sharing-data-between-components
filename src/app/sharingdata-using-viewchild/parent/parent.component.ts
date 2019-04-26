import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Child1Component } from '../child/child.component';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class Parent1Component implements AfterViewInit  {

  @ViewChild(Child1Component) child;

  constructor( ) { }

  ngAfterViewInit()
  {
   
  }
}