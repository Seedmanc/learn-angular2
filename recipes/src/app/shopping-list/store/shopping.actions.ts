import {Action} from '@ngrx/store';
import {Ingredient} from "../../shared/ingredient.model";

export const ADD_ING = 'ADD_INGREDIENT';
export const ADD_INGS = 'ADD_INGREDIENTS';
export const UPD_INGS = {};
export const DEL_INGS = {};
export const START_EDIT = {};
export const STOP_EDIT = {};

export class AddIngredient implements Action {
  readonly type = ADD_ING;
  constructor(public payload:Ingredient) {}
}
export class AddIngredients implements Action {
  readonly type = ADD_INGS;
  constructor(public payload:Ingredient[]) {}
}
export class UpdIngredient implements Action {
  readonly type = <string>UPD_INGS;
  constructor(public payload:{ingredient:Ingredient}) {}
}
export class DelIngredient implements Action {
  readonly type = <string>DEL_INGS;
  constructor(public payload?) {}
}
export class StartEdit implements Action {
  readonly type = <string>START_EDIT;
  constructor(public payload:number) {}
}
export class StopEdit implements Action {
  readonly type = <string>STOP_EDIT;
  constructor(public payload?) {}
}

export type ShoppingActions = AddIngredient | AddIngredients | UpdIngredient | DelIngredient | StartEdit | StopEdit;
