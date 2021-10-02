import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.mode';

@Injectable()
export class ShoppingListService {

  private ingredients: Ingredient[] = [
    new Ingredient("Jajko", 3),
    new Ingredient("Kapusta", 2)
  ];

  onIngredientsChanged: Subject<Ingredient[]> = new Subject<Ingredient[]>();

  constructor() { }

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.onIngredientsChanged.next(this.ingredients.slice())
  }
}
