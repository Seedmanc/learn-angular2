import {Ingredient} from "../shared/ingredient.model";
import { Subject} from "rxjs";

export class ShoppingListService {
  ingChanged = new Subject<Ingredient[]>();
  editing = new Subject<number>();

  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 10),
  ];

  getIng(id) {
    return this.ingredients[id];
  }

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

  updIngs(id: number, ing: Ingredient) {
    this.ingredients[id] = ing;
    this.ingChanged.next(this.ingredients);
  }

  delIng(id) {
    this.ingredients.splice(id, 1);
    this.ingChanged.next(this.ingredients);
  }
}
