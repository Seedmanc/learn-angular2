import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipesService} from "../recipes.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Store} from '@ngrx/store';
import * as ShoppingActions from '../../shopping-list/store/shopping.actions';
import * as fromApp from '../../store/app.reducers';

@Component({
  selector: 'recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipesService, private route: ActivatedRoute, private router:Router, private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.recipe = this.recipeService.getRecipe(params['id']);
      this.id=params.id;
    });
  }

  toShopList(){
    this.store.dispatch(new ShoppingActions.AddIngredients(this.recipe.ingredients));
  }

  onDelete() {
    this.recipeService.remove(this.id);
    this.router.navigate(['/recipes']);
  }

}
