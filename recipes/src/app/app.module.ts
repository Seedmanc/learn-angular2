import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {ShoppingListService} from "./shopping-list/shopping-list.service";
import {AppRoutingModule} from "./app-routing.module";
import {RecipesService} from "./recipes/recipes.service";
import {AuthService} from "./auth/auth.service";
import {AuthGuard} from "./auth/auth-guard.service";
import {SharedModule} from "./shared/shared.module";
import {ShoppingModule} from "./shopping-list/shopping.module";
import {AuthModule} from "./auth/auth.module";
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    ShoppingModule,
    SharedModule,
    AuthModule
  ],
  providers: [ShoppingListService, RecipesService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
