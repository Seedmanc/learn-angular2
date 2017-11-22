import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice3',
  templateUrl: './practice3.component.html',
  styleUrls: ['./practice3.component.css']
})
export class Practice3Component implements OnInit {

  show: boolean = false;
  clicks: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.show = !this.show;
    this.clicks.push((new Date()).toISOString());
  }
  getColor(i: number){
    return i >= 4 ? 'blue' : '';
  }
}
