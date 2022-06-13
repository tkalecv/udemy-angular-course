import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Test Recipe",
     "This is a test recipe",
     "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/image_data/file/108320/s960_pizza-slice.jpg"),
     new Recipe("Test Recipe",
     "This is a test recipe",
     "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/image_data/file/108320/s960_pizza-slice.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
