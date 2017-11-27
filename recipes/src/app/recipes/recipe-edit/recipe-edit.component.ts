import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import {RecipesService} from "../recipes.service";
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  form: FormGroup;
  amountValidators = [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)];

  constructor(private route: ActivatedRoute, private recipeService: RecipesService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id=params.id;
      this.editMode = !!this.id;
      this.initForm();
    })
  }

  private initForm() {
    let recipe: Recipe = <Recipe>{ingredients: []};
    let recipeIngredients = [];

    if (this.editMode) {
      recipe = this.recipeService.getRecipe(this.id);
      recipeIngredients = recipe.ingredients.map(ing => new FormGroup({
          'name': new FormControl(ing.name, Validators.required),
          'amount':new FormControl(ing.amount, this.amountValidators)
        })
      )
    }

    this.form = new FormGroup({
      'name': new FormControl(recipe.name, Validators.required),
      'imgpath': new FormControl(recipe.imgpath, Validators.required),
      'descr': new FormControl(recipe.descr, Validators.required),
      'ingredients': new FormArray(recipeIngredients)
    });
  }

  addIngredient() {
    this.form.get('ingredients')['push'](
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, this.amountValidators)
      })
    )
  }

  onSubmit() {
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, new Recipe(this.form.value))
    } else {
      this.recipeService.addRecipe(this.form.value)
    }
  }

}
