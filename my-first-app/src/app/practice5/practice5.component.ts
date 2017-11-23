import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-practice5',
  templateUrl: './practice5.component.html',
  styleUrls: ['./practice5.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Practice5Component implements OnInit {

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor() { }
  ngOnInit() {
  }

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }

}
