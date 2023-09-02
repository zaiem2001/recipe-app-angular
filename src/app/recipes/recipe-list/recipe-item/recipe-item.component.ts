import { Component, Input, OnInit } from '@angular/core';

import { Recipe } from 'src/models/recipe.model';
import { RecipeService } from 'src/services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  onRecipeClick() {
    this.recipeService.onSelectRecipe.emit(this.recipe);
  }

  ngOnInit(): void {}
}
