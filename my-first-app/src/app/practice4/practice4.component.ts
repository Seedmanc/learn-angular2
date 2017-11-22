import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice4',
  templateUrl: './practice4.component.html',
  styleUrls: ['./practice4.component.css']
})
export class Practice4Component implements OnInit {
  numbers: number[] = [];

  constructor() { }

  ngOnInit() {
  }

  onGameEvent(data: number) {
    this.numbers.push(data);
  }

}
