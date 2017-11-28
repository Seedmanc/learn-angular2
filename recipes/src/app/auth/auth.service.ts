import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
  token: string;

  constructor() { }

  signupUser({email, password}) {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(err => console.log(err));
  }
  signinUser({email, password}) {
    firebase.auth().signInWithEmailAndPassword(email, password).then(response => {
      firebase.auth().currentUser.getToken().then(token => this.token=token)
    }).catch(err=>console.log(err));
  }

  getToken() {
    firebase.auth().currentUser.getToken();
    return this.token;
  }
}
