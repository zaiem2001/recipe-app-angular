import { Component, EventEmitter, Input, Output } from '@angular/core';

import { recipes } from 'src/app/constants/Recipes';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = recipes;
  @Output() handleRecipeClick = new EventEmitter<Recipe>();

  constructor() {}

  onRecipeClick(recipeData: Recipe) {
    this.handleRecipeClick.emit(recipeData);
  }
}
