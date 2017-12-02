import {animate, Component, state, style, transition, trigger} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('divState', [
      state('normal', style({
        backgroundColor: 'red',
        transform: 'translateX(0)'
      })),
      state('highlighted', style({
        backgroundColor: 'blue',
        transform: 'translateX(100px)'
      })),
      transition('normal <=> highlighted', animate(400))
    ]),
    trigger('wildState', [
      state('normal', style({
        backgroundColor: 'red',
        transform: 'translateX(0) scale(1)'
      })),
      state('highlighted', style({
        backgroundColor: 'blue',
        transform: 'translateX(100px) scale(1)'
      })),
      state('shrunken', style({
        backgroundColor: 'green',
        transform: 'translateX(0) scale(0.5)'
      })),
      transition('normal => highlighted', animate(400)),
      transition('highlighted => normal', animate(800)),
      transition('shrunken <=> *', animate(600)),
    ])
  ]
})
export class AppComponent {
  state = 'normal';
  wild = 'normal';
  list = ['Milk', 'Sugar', 'Bread'];

  onAdd(item) {
    this.list.push(item);
  }
  onDelete(item) {
    this.list.splice(this.list.indexOf(item),1);
  }
  onAnimate() {
    this.state = this.state == 'normal' ? 'highlighted': 'normal';
    this.wild = this.state == 'normal' ? 'highlighted': 'normal';
  }
  onShrink() {
    this.wild = 'shrunken';
  }

}
