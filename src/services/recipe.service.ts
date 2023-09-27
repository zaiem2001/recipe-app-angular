import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { ingredients } from 'src/constants/Ingredients';
import { recipes } from 'src/constants/Recipes';
import { Ingredient } from 'src/models/ingredient.model';
import { Recipe } from 'src/models/recipe.model';
import { generateId } from 'src/utils/generateId.helper';

@Injectable()
export class RecipeService {
  onSelectRecipe = new EventEmitter<Recipe>();
  private recipesData: Recipe[] = recipes;
  recipeChanges = new Subject<Recipe[]>();

  getRecipes() {
    return [...this.recipesData];
  }

  getRecipe(id: number) {
    return this.recipesData[id];
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

  addOrUpdateRecipe(recipe: Recipe, isEditing: boolean, id?: number) {
    if (isEditing) {
      this.recipesData[id] = recipe;
    } else {
      this.recipesData.push(recipe);
    }

    this.recipeChanges.next(this.recipesData.slice());
  }

  deleteRecipe(id: number) {
    this.recipesData.splice(id, 1);
    this.recipeChanges.next(this.recipesData.slice())
  }
}
