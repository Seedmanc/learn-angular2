import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import "rxjs/Rx";
//import "rxjs/Rxjs";
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthService {
  //token: string;

  constructor(private router: Router) { }

  signupUser({email, password}) {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(err => console.log(err));
  }
  signinUser({email, password}) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => this.router.navigate(['/recipes']))
      .catch(err=>console.log(err));
  }

  getToken() {
    return Observable.fromPromise(firebase.auth().currentUser.getToken()/*.then(token => this.token = token)*/);
  }

  isAuthed() {
    return !!firebase.auth().currentUser;
  }

  logout() {
    firebase.auth().signOut();
  }

}
