import { Component } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent {
  currentRecipe: Recipe | null;

  constructor() {}

  onRecipeClick(recipeData: Recipe) {
    this.currentRecipe = recipeData;
  }
}
