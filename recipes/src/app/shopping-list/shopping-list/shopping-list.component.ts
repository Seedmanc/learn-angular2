import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {Observable} from "rxjs/Observable";
import {Store} from "@ngrx/store";
import * as fromShopping from '../store/shopping.reducers';
import * as ShoppingActions from '../store/shopping.actions';

@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit  {

  shoppingState: Observable<{ingredients: Ingredient[]}>;

  constructor(private store: Store<fromShopping.AppState>) { }

  ngOnInit() {
    this.shoppingState = this.store.select('shoppingList');
  }

  edit(id: number) {
    this.store.dispatch(new ShoppingActions.StartEdit(id));
  }
}
