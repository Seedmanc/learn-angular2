import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import "rxjs/Rx";
//import "rxjs/Rxjs";
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import * as fromApp from '../store/app.reducers';
import * as AuthActions from './store/auth.actions';

@Injectable()
export class AuthService {

  constructor(private router: Router, private store: Store<fromApp.AppState>) { }

  signupUser({email, password}) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(()=> this.store.dispatch(new AuthActions.SignUp()))
      .catch(err => console.log(err));
  }
  signinUser({email, password}) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => {
        this.store.dispatch(new AuthActions.SignIn());
        this.router.navigate(['/recipes'])
      })
      .catch(err=>console.log(err));
  }

  getToken() {
    return Observable.fromPromise(firebase.auth().currentUser.getToken());
  }

  isAuthed() {
    return !!firebase.auth().currentUser;
  }

  logout() {
    firebase.auth().signOut();
    this.store.dispatch(new AuthActions.LogOut());
  }

}
