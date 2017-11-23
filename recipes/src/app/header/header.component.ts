import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rcp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() switchPage = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
