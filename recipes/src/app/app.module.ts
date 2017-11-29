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
import {RecipeModule} from "./recipes/recipe.module";
import {SharedModule} from "./shared/shared.module";
import {ShoppingModule} from "./shopping-list/shopping.module";
import {AuthModule} from "./auth/auth.module";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    RecipeModule,
    ShoppingModule,
    SharedModule,
    AuthModule
  ],
  providers: [ShoppingListService, RecipesService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
