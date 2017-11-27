import {Ingredient} from "../shared/ingredient.model";
export class Recipe {
  public name: string;
  public descr: string;
  public imgpath: string;
  public ingredients: Ingredient[];

  constructor(name: string, descr: string, imgpath: string, ingredients: Ingredient[]) {
    Object.assign(this, {name, descr, imgpath, ingredients});
  }
}
