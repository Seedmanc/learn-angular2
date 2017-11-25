import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {AppComponent} from "./app.component";
import {RecipesComponent} from "./recipes/recipes.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list/shopping-list.component";
import {ErrorPageComponent} from "./error-page/error-page.component";
import {RecipeDetailComponent} from "./recipes/recipe-detail/recipe-detail.component";
import {RecipePlaceholderComponent} from "./recipes/recipe-placeholder/recipe-placeholder.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent, children: [
    { path: ':id', component: RecipeDetailComponent},
    { path: '', component: RecipePlaceholderComponent, pathMatch: 'full'},
  ]  },
  { path: 'shopping', component: ShoppingListComponent  },
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
