import { Component, OnInit, OnDestroy } from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  sub: Subscription;

  ingredients: Ingredient[];

  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingService.getList();
    this.sub = this.shoppingService.ingChanged.subscribe(list => this.ingredients = list);
  }

  edit(id: number) {
    this.shoppingService.editing.next(id);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
