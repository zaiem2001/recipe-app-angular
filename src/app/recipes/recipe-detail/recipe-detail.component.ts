import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { recipes } from 'src/constants/Recipes';

import { Recipe } from 'src/models/recipe.model';
import { RecipeService } from 'src/services/recipe.service';

const getRecipeWithId = (idx: number) => recipes[idx];

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  currentRecipe: Recipe | null;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const recipeId = params['id'];
      this.currentRecipe = getRecipeWithId(recipeId);
    });
  }

  addToShoppingList(recipeData: Recipe) {
    this.recipeService.addToShoppoingList(recipeData.ingredients);
  }
}
