import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Ingredient} from "../../../shared/ingredient.model";
import {ShoppingListService} from "../../shopping-list.service";

@Component({
  selector: 'shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;

  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit() {
  }

  addItem(amount: number) {
    this.shoppingService.addIng(new Ingredient(this.nameInput.nativeElement.value, amount));
  }
}
