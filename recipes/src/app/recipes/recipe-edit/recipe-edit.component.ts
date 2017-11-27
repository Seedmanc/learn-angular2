import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
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

    if (this.editMode) {
      recipe = this.recipeService.getRecipe(this.id);
    }

    this.form = new FormGroup({
      name: new FormControl(recipe.name),
      imgpath: new FormControl(recipe.imgpath),
      descr: new FormControl(recipe.descr)
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }

}
