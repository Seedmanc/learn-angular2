import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {UserService} from "./user.service";
import {CounterService} from "./counter.service";

@Component({
  selector: 'app-practice5',
  templateUrl: './practice5.component.html',
  styleUrls: ['./practice5.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [UserService]
})
export class Practice5Component implements OnInit {

  activeUsers: string[] = [];
  inactiveUsers: string[] = [];

  constructor(private userService: UserService, private counterService: CounterService) { }

  ngOnInit() {
    this.activeUsers = this.userService.activeUsers;
    this.inactiveUsers = this.userService.inactiveUsers;
  }

}
