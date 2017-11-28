import {Ingredient} from "../shared/ingredient.model";
export class Recipe {
  public name: string;
  public descr: string;
  public imgpath: string;
  public ingredients: Ingredient[];

  constructor(data:{name: string, descr: string, imgpath: string, ingredients: Ingredient[]}) {
    Object.assign(this, data);
    this.ingredients = this.ingredients || [];
  }
}
