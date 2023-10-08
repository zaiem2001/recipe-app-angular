import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RecipesComponent } from './recipes.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipesRouterModule } from './recipes-router.module';
import { DropdownDirective } from 'src/directives/dropdown.directive';

const recipeComponents = [
  RecipesComponent,
  RecipeListComponent,
  RecipeDetailComponent,
  RecipeItemComponent,
  RecipeStartComponent,
  RecipeEditComponent,
  DropdownDirective,
];

@NgModule({
  declarations: [...recipeComponents],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    CommonModule,
    RecipesRouterModule,
  ],
})
export class RecipesModule {}
