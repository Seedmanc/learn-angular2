import {Component, ViewChild} from '@angular/core';
import {Form} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') form:Form;

  types: string[] = [
    'Basic',
    'Advanced',
    'Pro'
  ];

  onSubmit() {
    console.log(this.form);
  }

}
