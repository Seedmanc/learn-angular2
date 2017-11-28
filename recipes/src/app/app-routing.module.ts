import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {AppComponent} from "./app.component";
import {RecipesComponent} from "./recipes/recipes.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list/shopping-list.component";
import {ErrorPageComponent} from "./error-page/error-page.component";
import {RecipeDetailComponent} from "./recipes/recipe-detail/recipe-detail.component";
import {RecipePlaceholderComponent} from "./recipes/recipe-placeholder/recipe-placeholder.component";
import {RecipeEditComponent} from "./recipes/recipe-edit/recipe-edit.component";
import {SignupComponent} from "./auth/signup/signup.component";
import {SigninComponent} from "./auth/signin/signin.component";
import {AuthGuard} from "./auth/auth-guard.service";

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent, children: [
    { path: '', component: RecipePlaceholderComponent, pathMatch: 'full'},
    { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard]},
    { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard]},
    { path: ':id', component: RecipeDetailComponent},
  ]  },
  { path: 'shopping', component: ShoppingListComponent  },
  { path: 'signup', component: SignupComponent  },
  { path: 'signin', component: SigninComponent  },
  {path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'}},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
