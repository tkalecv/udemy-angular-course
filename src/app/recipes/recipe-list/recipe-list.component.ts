import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() showRecipeDetails = new EventEmitter<Recipe>();
  
  recipes: Recipe[] = [
    new Recipe("Test Recipeeeeeee",
     "This is a test recipe",
     "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/image_data/file/108320/s960_pizza-slice.jpg"),
     new Recipe("Test Recipe",
     "This is a test recipe",
     "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/image_data/file/108320/s960_pizza-slice.jpg"),
     new Recipe("Recipe Test",
     "This is a test recipe",
     "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/image_data/file/108320/s960_pizza-slice.jpg")
  ];

  onRecipeSelected(selectedRecipe: Recipe){
    this.showRecipeDetails.emit(selectedRecipe)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
