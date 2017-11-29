import {Ingredient} from "../shared/ingredient.model";
import { Subject} from "rxjs/Subject";

export class ShoppingListService {
  ingChanged = new Subject<Ingredient[]>();
  editing = new Subject<number>();

  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 10),
  ];

  private pushChanges() {
    this.ingChanged.next(this.ingredients.slice());
  }

  getIng(id) {
    return this.ingredients[id];
  }

  getList() {
    return this.ingredients.slice();
  }

  addIng(ing: Ingredient){
    const id = this.ingredients.findIndex(el => el.name == ing.name);

    if (~id) {
      this.ingredients[id].amount += ing.amount;
    } else {
      this.ingredients.push(ing);
    }
    this.pushChanges();
  }

  addIngs(ings: Ingredient[]){
    ings.forEach(ing => this.addIng(ing));
  }

  updIngs(id: number, ing: Ingredient) {
    this.ingredients[id] = ing;
    this.pushChanges();
  }

  delIng(id) {
    this.ingredients.splice(id, 1);
    this.pushChanges();
  }
}
