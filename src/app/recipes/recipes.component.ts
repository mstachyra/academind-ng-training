import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  providers: [RecipesService]
})
export class RecipesComponent implements OnInit, OnDestroy {

  selectedRecipe: Recipe | undefined;
  selectedSubscription!: Subscription;

  constructor(private recipesService: RecipesService) {

  }
  ngOnDestroy(): void {
    this.selectedSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.selectedRecipe = undefined;// this.recipesService.selectedRecipe;

    this.selectedSubscription = this.recipesService.selectedChanged.subscribe(recipe => {
      this.selectedRecipe = recipe;
    });
  }

}
