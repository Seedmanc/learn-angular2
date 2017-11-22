import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
  @Input('theNumber') number: number;

  constructor() { }

  ngOnInit() {
  }

}
