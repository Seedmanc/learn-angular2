import { Component, OnInit, OnDestroy } from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipesService} from "../recipes.service";
import {Subscription} from 'rxjs'

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  sub: Subscription;

  constructor(private recipeService: RecipesService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.sub =this.recipeService.recipesChanges.subscribe(rs => this.recipes = rs);
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
