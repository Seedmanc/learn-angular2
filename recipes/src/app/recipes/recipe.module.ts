import {NgModule} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import {RecipesComponent} from "./recipes.component";
import {RecipeItemComponent} from "./recipe-list/recipe-item/recipe-item.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {RecipePlaceholderComponent} from "./recipe-placeholder/recipe-placeholder.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {RecipesRoutingModule} from "./recipes-routing.module";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipePlaceholderComponent,
    RecipeEditComponent,
    RecipeListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecipesRoutingModule,
    SharedModule
  ]
})
export class RecipeModule {}
