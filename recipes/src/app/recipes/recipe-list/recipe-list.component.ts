import { Component, OnInit, OnDestroy } from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipesService} from "../recipes.service";
import {Subscription} from 'rxjs/Subscription'
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  sub: Subscription;

  constructor(private recipeService: RecipesService, public authS: AuthService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.sub =this.recipeService.recipesChanges.subscribe(rs => this.recipes = rs);
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
