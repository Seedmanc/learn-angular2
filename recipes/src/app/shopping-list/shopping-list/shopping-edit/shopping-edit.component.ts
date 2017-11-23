import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import {Ingredient} from "../../../shared/ingredient.model";

@Component({
  selector: 'shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @Output() ingAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  addItem(amount: number) {
    this.ingAdded.emit(new Ingredient(this.nameInput.nativeElement.value, amount));
  }
}
