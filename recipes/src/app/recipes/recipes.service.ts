import { Injectable } from '@angular/core';
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {Subject} from "rxjs/Subject";
import "rxjs/Rx";
//import "rxjs/Rxjs";
import {HttpClient, HttpRequest} from "@angular/common/http";
import {AuthService} from "../auth/auth.service";

@Injectable()
export class RecipesService {
  recipesChanges = new Subject<Recipe[]>();

  constructor(private http: HttpClient, private authS:AuthService){}

  private recipes: Recipe[] = [
    new Recipe({
      name:'Schnitzel', descr:'this is a test', imgpath:'https://d30y9cdsu7xlg0.cloudfront.net/png/82540-200.png',
      ingredients:[
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]
    }),
    new Recipe({name:'Burger', descr:'this is again a test', imgpath:'https://d30y9cdsu7xlg0.cloudfront.net/png/82545-200.png',
        ingredients:[
          new Ingredient('Buns', 2),
          new Ingredient('Meat', 1)
      ]
    }),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(id: number) {
    return this.recipes.slice()[id];
  }

  addRecipe(r: Recipe) {
    this.recipes.push(r);
    this.recipesChanges.next(this.recipes.slice())
  }
  updateRecipe(i: number, r: Recipe) {
    this.recipes[i] = r;
    this.recipesChanges.next(this.recipes.slice())
  }

  remove(id: number){
    if (!this.authS.isAuthed()) return;

    this.recipes.splice(id, 1);
    this.recipesChanges.next(this.recipes.slice())
  }

  save() {
    const req = new HttpRequest('PUT','https://ng-recipe-book-f8908.firebaseio.com/recipes.json', this.recipes,{reportProgress:true});
    return this.http.request(req);
  }
  load() {
    return this.authS.getToken()
      .flatMap(token => this.http.get<any[]>('https://ng-recipe-book-f8908.firebaseio.com/recipes.json'))
      .map(recipes => {
          this.recipes = recipes.map(el => new Recipe(el));
          this.recipesChanges.next(this.recipes.slice());
          return recipes;
        })
  }

}
