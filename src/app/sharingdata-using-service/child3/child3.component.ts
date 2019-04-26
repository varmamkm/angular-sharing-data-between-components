import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {

  message:string;

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(message=>this.message=message);
  }

  newMessage(){
    this.dataService.changeMessage(this.message);
  }

}