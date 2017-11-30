import {Action} from '@ngrx/store';
import {Ingredient} from "../../shared/ingredient.model";

export const ADD_ING = 'ADD_INGREDIENT';
export const ADD_INGS = 'ADD_INGREDIENTS';

export class AddIngredient implements Action {
  readonly type = ADD_ING;
  constructor(public payload:Ingredient) {}
}
export class AddIngredients implements Action {
  readonly type = ADD_INGS;
  constructor(public payload:Ingredient[]) {}
}

export type ShoppingActions = AddIngredient|AddIngredients;
