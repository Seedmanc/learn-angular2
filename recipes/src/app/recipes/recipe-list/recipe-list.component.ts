import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'this is a test', 'https://d30y9cdsu7xlg0.cloudfront.net/png/82540-200.png')
  ];

  constructor() { }

  ngOnInit() {
  }

}
