import * as fromShopping from "../shopping-list/store/shopping.reducers";
import * as fromAuth from "../auth/store/auth.reducers";
import {ActionReducerMap} from '@ngrx/store';

export interface AppState {
  shoppingList: fromShopping.State,
  auth: fromAuth.State,
}

export const reducers: ActionReducerMap<AppState> = {
  shoppingList: fromShopping.shoppingReducer,
  auth: fromAuth.authReducer
};
