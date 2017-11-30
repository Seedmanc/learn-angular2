import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {SharedModule} from "./shared/shared.module";
import {ShoppingModule} from "./shopping-list/shopping.module";
import {AuthModule} from "./auth/auth.module";
import {CoreModule} from "./core/core.module";
import {shoppingReducer} from "./shopping-list/store/shopping.reducers";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ShoppingModule,
    SharedModule,
    AuthModule,
    CoreModule,
    StoreModule.forRoot({shoppingList: shoppingReducer})
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
