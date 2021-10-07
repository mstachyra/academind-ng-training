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

  startingEditing: Subject<number> = new Subject<number>();

  constructor() { }

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  startEditing(index: number) {
    this.startingEditing.next(index);
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.onIngredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.onIngredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.onIngredientsChanged.next(this.ingredients.slice());
  }
}
