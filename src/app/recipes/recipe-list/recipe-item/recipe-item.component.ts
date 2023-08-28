import { Output, Component, Input, OnInit, EventEmitter } from '@angular/core';

import { Recipe } from 'src/models/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() handleRecipeClick = new EventEmitter<void>();

  constructor() {}

  onRecipeClick() {
    this.handleRecipeClick.emit();
  }

  ngOnInit(): void {}
}
