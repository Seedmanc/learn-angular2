import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";
import {Observable} from "rxjs/Observable";
import {Store} from "@ngrx/store";

@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit  {

  shoppingState: Observable<{ingredients: Ingredient[]}>;

  constructor(private shoppingService: ShoppingListService, private store: Store<{
    shoppingList: {ingredients: Ingredient[]}
  }>) { }

  ngOnInit() {
    this.shoppingState = this.store.select('shoppingList');
  }

  edit(id: number) {
    this.shoppingService.editing.next(id);
  }
}
