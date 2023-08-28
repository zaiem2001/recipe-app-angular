import { Component } from '@angular/core';
import { Ingredient } from '../../models/ingredient.model';
import { ingredients } from '../../constants/Ingredients';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = ingredients;
  selectedIngredient: Ingredient | null;

  onIngredientSelect(ingredient: Ingredient) {
    this.selectedIngredient = ingredient;
  }
}
