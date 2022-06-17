import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";
import { ShoppingListService } from "src/app/shopping-list/services/shoppingList.service";
import { Recipe } from "../recipe.model";

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe("Test Recipeeeeeee",
         "This is a test recipe",
         "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/image_data/file/108320/s960_pizza-slice.jpg",
         [
            new Ingredient("Meat", 1),
            new Ingredient("Fries", 20)
         ]),
         new Recipe("Test Recipe",
         "This is a test recipe",
         "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/image_data/file/108320/s960_pizza-slice.jpg",
         [
            new Ingredient("Buns", 2),
            new Ingredient("Mear", 1)
         ]),
         new Recipe("Recipe Test",
         "This is a test recipe",
         "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/image_data/file/108320/s960_pizza-slice.jpg",
         [
            new Ingredient("Test", 2),
            new Ingredient("Test", 1)
         ])
      ];

    constructor(private shoppingListService: ShoppingListService){
        
    }

    getRecipes(): Recipe[]{
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }
}