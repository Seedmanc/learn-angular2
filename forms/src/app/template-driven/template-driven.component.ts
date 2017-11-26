import {Component, OnInit, ViewChild} from '@angular/core';
import {Form} from "@angular/forms";

@Component({
  selector: 'template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
  @ViewChild('f') form:Form;

  types: string[] = [
    'Basic',
    'Advanced',
    'Pro'
  ];

  onSubmit() {
    console.log(this.form);
  }
  ngOnInit() {
  }

}
