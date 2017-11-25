import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  loggedIn=false;

  login () {
    this.loggedIn = true;
  }
  logout() {
    this.loggedIn = false;
  }
  isAuthed() {
    return new Promise(resolve => {
      setTimeout(()=> resolve(this.loggedIn), 800)
    })
  }
  constructor() { }

}
