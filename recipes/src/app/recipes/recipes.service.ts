import { Injectable } from '@angular/core';
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs";

@Injectable()
export class RecipesService {
  recipesChanges = new Subject<Recipe[]>();

  constructor(private shopService: ShoppingListService){}

  private recipes: Recipe[] = [
    new Recipe({
      name:'Schnitzel', descr:'this is a test', imgpath:'https://d30y9cdsu7xlg0.cloudfront.net/png/82540-200.png',
      ingredients:[
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]
    }),
    new Recipe({name:'Burger', descr:'this is again a test', imgpath:'https://d30y9cdsu7xlg0.cloudfront.net/png/82545-200.png',
        ingredients:[
          new Ingredient('Buns', 2),
          new Ingredient('Meat', 1)
      ]
    }),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(id: number) {
    return this.recipes.slice()[id];
  }

  addToShop(ingredients: Ingredient[]) {
    this.shopService.addIngs(ingredients);
  }

  addRecipe(r: Recipe) {
    this.recipes.push(r);
    this.recipesChanges.next(this.recipes.slice())
  }
  updateRecipe(i: number, r: Recipe) {
    this.recipes[i] = r;
    this.recipesChanges.next(this.recipes.slice())
  }

  remove(id: number){
    this.recipes.splice(id, 1);
    this.recipesChanges.next(this.recipes.slice())
  }

}
