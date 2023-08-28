import { Injectable } from '@angular/core';

import { ingredients } from 'src/constants/Ingredients';
import { Ingredient } from 'src/models/ingredient.model';

@Injectable()
export class ShoppingListService {
  getIngredients() {
    return ingredients;
  }

  addIngredients(ingredientData: Ingredient) {
    const { name, amount, id } = ingredientData;
    const newIngredient = new Ingredient(name, amount, id);
    ingredients.push(newIngredient);
  }

  deleteIngredient(selectedIngredientId: number, cb: () => void) {
    ingredients.splice(selectedIngredientId, 1);
    cb();
  }
}
