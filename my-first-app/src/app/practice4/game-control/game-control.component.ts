import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() gameEvent = new EventEmitter<number>();

  private ref: any;
  counter: number = 0;

  constructor() { }

  ngOnInit() {
  }

  start() {
    this.ref = setInterval(() => this.gameEvent.emit(this.counter++), 1000);
  }
  stop() {
    clearInterval(this.ref);
  }

}
