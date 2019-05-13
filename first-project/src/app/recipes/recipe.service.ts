import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Test', 'DescTest', '../../../assets/img/angular.png', 
            [new Ingredient('ing1', 2), new Ingredient('ing2', 50)]),
        new Recipe('Test2222', 'DescTest2222', '../../../assets/img/angular.png', 
            [new Ingredient('ing1', 2), new Ingredient('ing2', 50), new Ingredient('ing3', 1000)])
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice(); // get a copy
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}