import { Component } from '@angular/core';
import { RecipeService } from './recipes/recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipeService]
})
export class AppComponent {
  title = 'njk';
  recipeComponent = true;
  shoppingComponent = false;
  featureSelected(result){
    this.recipeComponent = result.recipe;
    this.shoppingComponent = result.shopping;
  }
  
}
