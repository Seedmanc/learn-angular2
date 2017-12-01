import { Component, OnInit } from '@angular/core';
import {RecipesService} from "../../recipes/recipes.service";
import {AuthService} from "../../auth/auth.service";
import {HttpEvent} from "@angular/common/http";

@Component({
  selector: 'rcp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private recipeService: RecipesService, public authS: AuthService) { }

  ngOnInit() {
  }

  save() {
    this.recipeService.save().subscribe((response: HttpEvent<Object>) => console.log(response) );
  }
  load() {
    this.recipeService.load().subscribe( );
  }

}
