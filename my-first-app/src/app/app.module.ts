import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WarningAlertComponent } from "./practice1/warning-alert/warning-alert.component";
import { SuccessAlertComponent } from './practice1/success-alert/success-alert.component';
import { Practice1Component } from './practice1/practice1.component';
import { Practice2Component } from './practice2/practice2.component';
import {FormsModule} from "@angular/forms";
import {Practice3Component} from "./practice3/practice3.component";
import { Practice4Component } from './practice4/practice4.component';
import { GameControlComponent } from './practice4/game-control/game-control.component';
import { OddComponent } from './practice4/odd/odd.component';
import { EvenComponent } from './practice4/even/even.component';
import { Practice5Component } from './practice5/practice5.component';
import { ActiveUsersComponent } from './practice5/active-users/active-users.component';
import { InactiveUsersComponent } from './practice5/inactive-users/inactive-users.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    Practice1Component,
    Practice2Component,
    Practice3Component,
    Practice4Component,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    Practice5Component,
    ActiveUsersComponent,
    InactiveUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
