import { Ingredient } from 'src/models/ingredient.model';
import { Recipe } from '../models/recipe.model';
import { ingredients } from './Ingredients';

export const recipes: Recipe[] = [
  new Recipe(
    'Chicken Tikka',
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti quod iure eius?',
    'https://hips.hearstapps.com/hmg-prod/images/chicken-tikka-masala1-1663341991.jpg',
    [
      new Ingredient('chicken', 1, ingredients.length),
      new Ingredient('curd', 3, ingredients.length),
      new Ingredient('tomatoes', 4, ingredients.length),
    ]
  ),
  new Recipe(
    'Butter Chicken',
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti quod iure eius?',
    'https://cafedelites.com/wp-content/uploads/2019/01/Butter-Chicken-IMAGE-64.jpg',
    [
      new Ingredient('chicken', 1, ingredients.length),
      new Ingredient('cream', 3, ingredients.length),
      new Ingredient('onion', 4, ingredients.length),
    ]
  ),
  new Recipe(
    'Paneer Tikka',
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti quod iure eius?',
    'https://www.indianveggiedelight.com/wp-content/uploads/2021/08/air-fryer-paneer-tikka-featured.jpg',
    [
      new Ingredient('paneer', 1, ingredients.length),
      new Ingredient('curd', 3, ingredients.length),
      new Ingredient('mirchi', 4, ingredients.length),
    ]
  ),
  new Recipe(
    'Masala Dosa',
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti quod iure eius?',
    'https://hips.hearstapps.com/hmg-prod/images/chicken-tikka-masala1-1663341991.jpg',
    [
      new Ingredient('batter', 1, ingredients.length),
      new Ingredient('powder', 3, ingredients.length),
      new Ingredient('sambhar', 4, ingredients.length),
    ]
  ),
];
