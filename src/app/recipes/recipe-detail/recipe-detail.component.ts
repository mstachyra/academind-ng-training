import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe | undefined;
  id!: number;

  constructor(
    private shoppingListService: ShoppingListService,
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipesService) {
  }

  ngOnInit(): void {
    console.log(this.activatedRoute.params);
    this.id = +this.activatedRoute.snapshot.params['id'];
    this.recipe = this.recipeService.getRecipes()[this.id];
    // Nie widzi zmian

    // tu widzi
    this.activatedRoute.params.subscribe((v) =>{
      this.id = +v['id'];
      this.recipe = this.recipeService.getRecipes()[this.id];
    })
  }

  onAddToShoppingList(): void {

    console.log('add')
    this.recipe?.ingredients.forEach(ingredient => {
      console.log(ingredient);
      this.shoppingListService.addIngredient(ingredient);
    });
  }
}
