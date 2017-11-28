import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authS: AuthService) { }

  ngOnInit() {
  }

  signin(f: NgForm){
    this.authS.signinUser(f.value);
  }

}
