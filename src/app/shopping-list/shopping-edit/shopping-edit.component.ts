import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ingredients } from 'src/constants/Ingredients';
import { Ingredient } from 'src/models/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @Input() selectedIngredient: Ingredient | null;
  @ViewChild('nameInput', { static: false }) nameRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountRef: ElementRef;

  constructor() {}

  onAddIngredient() {
    const ingName = this.nameRef.nativeElement.value;
    const ingAmount = +this.amountRef.nativeElement.value;
    const ingredientId = ingredients.length;

    if (ingName.trim() && ingAmount) {
      const newIngredient = new Ingredient(ingName, ingAmount, ingredientId);
      ingredients.push(newIngredient);
    }

    // const { name, amount } = e.target;
    // const newIngredient = new Ingredient(
    //   name.value,
    //   amount.value,
    //   ingredientId
    // );
  }

  onIngredientDelete() {
    if (this.selectedIngredient) {
      const indexOfElement = ingredients.findIndex(
        (element) => element.id === this.selectedIngredient.id
      );

      ingredients.splice(indexOfElement, 1);
      this.selectedIngredient = null;
    }
  }
}
