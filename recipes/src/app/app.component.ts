import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyBWfVYAzkGykKCxRyMQUCEnTia16eYphPg",
      authDomain: "ng-recipe-book-f8908.firebaseapp.com",
    })
  }
}
