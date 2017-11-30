import {Ingredient} from "../../shared/ingredient.model";
import * as ShoppingActions from './shopping.actions';

const initialState = {
  ingredients:   [
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 10),
  ]
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
        ingredients: [...state.ingredients, ...action.payload].reduce((prev, curr) => {
          const id = prev.findIndex(el => el.name == curr.name);
          if (~id) {
            prev[id].amount+=curr.amount;
          } else {
            prev.push(curr);
          }
          return prev;
        }, [])
      };
    default:
      return state;
  }
}
