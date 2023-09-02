import { Component, Input } from '@angular/core';
import { Recipe } from 'src/models/recipe.model';
import { RecipeService } from 'src/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent {
  @Input() currentRecipe: Recipe | null;

  constructor(private recipeService: RecipeService) {}

  addToShoppingList(recipeData: Recipe) {
    this.recipeService.addToShoppoingList(recipeData.ingredients);
  }
}
