import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import * as ShoppingActions from '../../store/shopping.actions';
import * as fromShopping from '../../store/shopping.reducers';

import {Ingredient} from "../../../shared/ingredient.model";

@Component({
  selector: 'shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('form') form:NgForm;
  sub: Subscription;
  editMode: boolean;
  editItem: Ingredient;

  constructor(private store: Store<fromShopping.AppState>) { }

  ngOnInit() {
    this.sub = this.store.select('shoppingList').subscribe(data => {
      if (~data.editId) {
        this.editItem = data.editIng;
        this.editMode = true;
        this.form.setValue(this.editItem);
      } else {
        this.editMode = false;
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  addItem() {
    if (this.editMode)
      this.store.dispatch(new ShoppingActions.UpdIngredient({ingredient:new Ingredient(this.form.value.name, this.form.value.amount)}))
    else
      this.store.dispatch(new ShoppingActions.AddIngredient(new Ingredient(this.form.value.name, this.form.value.amount)));

    this.clearForm();
  }

  clearForm() {
    this.form.reset();
    this.editMode = false;
  }

  deleteItem() {
    this.editMode = false;
    this.store.dispatch(new ShoppingActions.DelIngredient());
  }
}
