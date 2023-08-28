import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../models/ingredient.model';
import { ingredients } from '../../constants/Ingredients';
import { ShoppingListService } from 'src/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ShoppingListService],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];
  selectedIngredient: Ingredient | null;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
  }

  onIngredientSelect(ingredient: Ingredient) {
    this.selectedIngredient = ingredient;
  }
}
