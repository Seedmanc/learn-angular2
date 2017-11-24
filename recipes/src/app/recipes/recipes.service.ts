import { Injectable, Output, EventEmitter } from '@angular/core';
import {Recipe} from "./recipe.model";

@Injectable()
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A test recipe', 'this is a test', 'https://d30y9cdsu7xlg0.cloudfront.net/png/82540-200.png'),
    new Recipe('Another test recipe', 'this is again a test', 'https://d30y9cdsu7xlg0.cloudfront.net/png/82545-200.png'),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  constructor() { }

}
