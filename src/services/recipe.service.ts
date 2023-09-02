import { Injectable, EventEmitter } from '@angular/core';
import { ingredients } from 'src/constants/Ingredients';
import { recipes } from 'src/constants/Recipes';
import { Ingredient } from 'src/models/ingredient.model';
import { Recipe } from 'src/models/recipe.model';
import { generateId } from 'src/utils/generateId.helper';

@Injectable()
export class RecipeService {
  onSelectRecipe = new EventEmitter<Recipe>();
  private recipesData: Recipe[] = recipes;

  getRecipes() {
    return [...this.recipesData];
  }

  addToShoppoingList(recipeIngredients: Ingredient[]) {
    recipeIngredients.forEach((recipeIng) => {
      const foundIngredient = ingredients.find(
        (ingredient) => ingredient.name === recipeIng.name
      );

      if (!!foundIngredient) {
        foundIngredient.amount += recipeIng.amount;
      } else {
        ingredients.push(
          new Ingredient(recipeIng.name, recipeIng.amount, generateId())
        );
      }
    });
  }
}
