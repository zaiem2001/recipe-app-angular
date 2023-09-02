import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ingredients } from 'src/constants/Ingredients';
import { Ingredient } from 'src/models/ingredient.model';
import { ShoppingListService } from 'src/services/shopping-list.service';
import { generateId } from 'src/utils/generateId.helper';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @Input() selectedIngredient: Ingredient | null;
  @ViewChild('nameInput', { static: false }) nameRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  onAddIngredient() {
    const ingName = this.nameRef.nativeElement.value;
    const ingAmount = +this.amountRef.nativeElement.value;
    const ingredientId = generateId();

    if (ingName.trim() && ingAmount) {
      this.shoppingListService.addIngredients({
        name: ingName,
        amount: ingAmount,
        id: ingredientId,
      });
    }
  }

  onIngredientDelete() {
    if (this.selectedIngredient) {
      const indexOfElement = ingredients.findIndex(
        (element) => element.id === this.selectedIngredient.id
      );

      this.shoppingListService.deleteIngredient(
        indexOfElement,
        () => (this.selectedIngredient = null)
      );
    }
  }
}
