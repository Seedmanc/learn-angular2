import { Component, OnInit, OnDestroy } from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipesService} from "../recipes.service";
import {Subscription} from 'rxjs/Subscription'
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../auth/store/auth.reducers';
import {Observable }from 'rxjs/Observable';

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  sub: Subscription;
  authState: Observable<fromAuth.State>;

  constructor(private recipeService: RecipesService, private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.sub = this.recipeService.recipesChanges.subscribe(rs => this.recipes = rs);
    this.authState = this.store.select('auth');
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
