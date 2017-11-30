import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {HeaderComponent} from "./header/header.component";
import {HomeComponent} from "./home/home.component";
import {SharedModule} from "../shared/shared.module";
import {AppRoutingModule} from "../app-routing.module";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {RecipesService} from "../recipes/recipes.service";
import {AuthService} from "../auth/auth.service";
import {AuthInterceptor} from "../shared/auth.interceptor";
import {LoggingInterceptor} from "../shared/logging.interceptor";

@NgModule({
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
  providers: [
    ShoppingListService,
    RecipesService,
    AuthService,
    {provide: HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass:LoggingInterceptor, multi: true}
  ]
})
export class CoreModule { }
