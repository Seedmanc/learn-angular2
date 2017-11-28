import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authS: AuthService) { }

  ngOnInit() {
  }

  signup(f: NgForm){
    this.authS.signupUser(f.value);
  }

}
