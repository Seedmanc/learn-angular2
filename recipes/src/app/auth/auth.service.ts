import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import "rxjs/Rx";
import {Observable} from 'rxjs';

@Injectable()
export class AuthService {
  //token: string;

  constructor() { }

  signupUser({email, password}) {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(err => console.log(err));
  }
  signinUser({email, password}) {
    firebase.auth().signInWithEmailAndPassword(email, password).then(response => {}).catch(err=>console.log(err));
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
