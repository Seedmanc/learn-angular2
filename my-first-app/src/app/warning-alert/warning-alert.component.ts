import {Component} from "@angular/core";

@Component({
  selector: '.app-warning-alert',
  template: `
    <div class="alert">This is a warning alert</div>
  `,
  styles: [`
    .alert {
      background: red;
    }
  `]
})
export class WarningAlertComponent {

}
