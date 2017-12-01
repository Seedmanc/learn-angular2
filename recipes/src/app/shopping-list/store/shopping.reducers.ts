import {Ingredient} from "../../shared/ingredient.model";
import * as ShoppingActions from './shopping.actions';

export interface AppState {
  shoppingList: State
}

export interface State {
  ingredients: Ingredient[],
  editIng: Ingredient,
  editId: number
}

const initialState: State = {
  ingredients:   [
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 10),
  ],
  editIng: null,
  editId: -1
};

export function shoppingReducer(state = initialState, action: ShoppingActions.ShoppingActions){
  switch (action.type) {
    case ShoppingActions.ADD_ING:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      };
    case ShoppingActions.ADD_INGS:
      return {
        ...state,
        ingredients: [...state.ingredients, ...<any[]>action.payload].reduce((prev, curr) => {
          const id = prev.findIndex(el => el.name == curr.name);
          if (~id) {
            prev[id].amount+=curr.amount;
          } else {
            prev.push(curr);
          }
          return prev;
        }, [])
      };
    case ShoppingActions.UPD_INGS:
      const ingredients = [...state.ingredients];

      ingredients[state.editId] = {...state.ingredients[state.editId], ...action.payload['ingredient']};

      return {
        ...state,
        ingredients: ingredients,
        editIng: null,
        editId: -1
      };
    case ShoppingActions.DEL_INGS:
      const i = [...state.ingredients];
      i.splice(state.editId, 1);
      return {
        ...state,
        ingredients: i,
        editIng: null,
        editId: -1
      };
    case ShoppingActions.START_EDIT:
      return {
        ...state,
        editIng: {...state.ingredients[<number>action.payload]},
        editId: action.payload
      };
    case ShoppingActions.STOP_EDIT:
      return {
        ...state,
        editIng: null,
        editId: -1
      };
    default:
      return state;
  }
}
