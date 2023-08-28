import { Injectable, EventEmitter } from '@angular/core';
import { recipes } from 'src/constants/Recipes';
import { Recipe } from 'src/models/recipe.model';

@Injectable()
export class RecipeService {
  onSelectRecipe = new EventEmitter<Recipe>();
  private recipesData: Recipe[] = recipes;

  getRecipes() {
    return [...this.recipesData];
  }
}
