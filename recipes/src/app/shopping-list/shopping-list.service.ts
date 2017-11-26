import {Ingredient} from "../shared/ingredient.model";
import { Subject} from "rxjs";

export class ShoppingListService {
  ingChanged = new Subject<Ingredient[]>();

  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 10),
  ];

  getList() {
    return this.ingredients.slice();
  }

  addIng(ing: Ingredient){
    this.ingredients.push(ing);
    this.ingChanged.next(this.ingredients.slice());
  }

  addIngs(ings: Ingredient[]){
    this.ingredients.push(...ings);
    this.ingChanged.next(this.ingredients.slice());
  }
}
