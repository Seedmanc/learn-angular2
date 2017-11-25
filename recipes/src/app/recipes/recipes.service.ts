import { Injectable, Output, EventEmitter } from '@angular/core';
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shopService: ShoppingListService){}

  private recipes: Recipe[] = [
    new Recipe('Schnitzel', 'this is a test', 'https://d30y9cdsu7xlg0.cloudfront.net/png/82540-200.png',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]
    ),
    new Recipe('Burger', 'this is again a test', 'https://d30y9cdsu7xlg0.cloudfront.net/png/82545-200.png',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ]),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(id: number) {
    return this.recipes[id];
  }

  addToShop(ingredients: Ingredient[]) {
    this.shopService.addIngs(ingredients);
  }

}
