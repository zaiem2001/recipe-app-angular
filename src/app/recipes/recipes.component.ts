import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { RecipeService } from 'src/services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService],
})
export class RecipesComponent implements OnInit {
  currentRecipe: Recipe | null;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.onSelectRecipe.subscribe(
      (recipe: Recipe) => (this.currentRecipe = recipe)
    );
  }

  onRecipeClick(recipeData: Recipe) {
    this.currentRecipe = recipeData;
  }
}
