import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.mode';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[] = []
  ingredientsChangeSubscription!: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnDestroy(): void {
    this.ingredientsChangeSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.ingredientsChangeSubscription = this.shoppingListService.onIngredientsChanged.subscribe((value) => {
      this.ingredients = value;
    })
  }

  onEdit(index: number) {
    this.shoppingListService.startEditing(index);
  }

}
