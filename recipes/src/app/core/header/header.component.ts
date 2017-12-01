import { Component, OnInit } from '@angular/core';
import {RecipesService} from "../../recipes/recipes.service";
import {AuthService} from "../../auth/auth.service";
import {HttpEvent} from "@angular/common/http";
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../auth/store/auth.reducers';
import {Observable }from 'rxjs/Observable';

@Component({
  selector: 'rcp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  authState: Observable<fromAuth.State>;

  constructor(private recipeService: RecipesService, public authS: AuthService, private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.authState = this.store.select('auth');
  }

  save() {
    this.recipeService.save().subscribe((response: HttpEvent<Object>) => console.log(response) );
  }
  load() {
    this.recipeService.load().subscribe( );
  }

}
