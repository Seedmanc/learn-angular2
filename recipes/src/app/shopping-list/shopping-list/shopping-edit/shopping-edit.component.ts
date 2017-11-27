import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import {Ingredient} from "../../../shared/ingredient.model";
import {ShoppingListService} from "../../shopping-list.service";

@Component({
  selector: 'shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('form') form:NgForm;
  sub: Subscription;
  editMode: boolean;
  editId: number;

  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit() {
    this.sub = this.shoppingService.editing.subscribe(id=> {
      this.editMode = true;
      this.editId = id;
      this.form.setValue(this.shoppingService.getIng(id));
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  addItem() {
    if (this.editMode)
      this.shoppingService.updIngs(this.editId, new Ingredient(this.form.value.name, this.form.value.amount))
    else
      this.shoppingService.addIng(new Ingredient(this.form.value.name, this.form.value.amount));
    this.clearForm();
  }

  clearForm() {
    this.form.reset();
    this.editMode = false;
  }

  deleteItem(id) {
    this.editMode = false;
    this.shoppingService.delIng(id);
  }
}
