import { generateId } from 'src/utils/generateId.helper';
import { Ingredient } from '../models/ingredient.model';

export const ingredients: Ingredient[] = [
  new Ingredient('Apple', 5, generateId()),
  new Ingredient('Banana', 2, generateId()),
  new Ingredient('Strawberry', 15, generateId()),
];
