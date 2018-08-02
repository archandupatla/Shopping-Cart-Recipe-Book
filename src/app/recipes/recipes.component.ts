import { Component } from '@angular/core';
import { RecipeService } from './recipe.service'
import { Recipe } from './recipe.model';
@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
})
export class RecipesComponent{
    recipeName: string;
    recipeDescription: string;
    recipeImage: string;
    recipeDisplay: boolean;
    recipe: Recipe;
    RecipeGot(result){
        this.recipeDisplay = true;
    // this.recipeName = result.name;
    // this.recipeDescription = result.description;
    // this.recipeImage = result.imagePath;
    this.recipe = result;
}
}