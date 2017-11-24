import {Ingredient} from "../shared/ingredient.model";
import { EventEmitter} from "@angular/core";

export class ShoppingListService {
  ingChanged = new EventEmitter<Ingredient[]>();

  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 10),
  ];

  getList() {
    return this.ingredients.slice();
  }

  addIng(ing: Ingredient){
    this.ingredients.push(ing);
    this.ingChanged.emit(this.ingredients.slice());
  }

  addIngs(ings: Ingredient[]){
    this.ingredients.push(...ings);
    this.ingChanged.emit(this.ingredients.slice());
  }
}
