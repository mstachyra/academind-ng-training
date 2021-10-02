import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.mode';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipesService {
  private recipes: Recipe[] = [
    new Recipe(
      'Bigos',
      'Potrawa',
      'https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/bigos-01_0.jpg',
      [new Ingredient('Kapusta', 1), new Ingredient('Kiełbasa', 3)]
    ),
    new Recipe(
      'Szakszuka',
      'Śniadanie',
      'https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/jajka_w_pomidorach_01-1.jpg',
      [new Ingredient('Jaja', 2), new Ingredient('Pomidor', 3)]
    ),
  ];

  private selectedRecipe: Recipe | undefined;
  public selectedChanged: Subject<Recipe> = new Subject<Recipe>();
  constructor() {}

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  setSelectedRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe;
    this.selectedChanged.next(recipe);
  }
}
