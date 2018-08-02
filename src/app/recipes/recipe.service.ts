import { EventEmitter, Output } from '@angular/core';
import { Recipe } from './recipe.model'


export class RecipeService{
    //selectedRecipe = new EventEmitter<Recipe>();
    EmitRecipe = new EventEmitter<Recipe[]>();
    private recipe: Recipe[] = [new Recipe("Test Recipe", "This is a test recipe", 
    "https://i.ndtvimg.com/i/2016-07/chicken-korma_625x350_71467713811.jpg", [{name: "buns", amount: 20}]),
new Recipe("Test Recipe 2", "This is a Test Recipe 2",
 "https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg",
  [{name: "fries", amount: 40}])];

getRecipes() {
    return this.recipe.slice();
}
getRecipeByIndex(index: number){
    return this.recipe[index];
}
addRecipes(recipe: Recipe){
    this.recipe.push(recipe);
    console.log(this.recipe);
    this.EmitRecipe.emit(this.recipe.slice());
}
updateRecipe(id, recipe: Recipe){
    this.recipe[id] = recipe;
    console.log(this.recipe);
    this.EmitRecipe.emit(this.recipe.slice());
}
deleteRecipe(id){
this.recipe.splice(id, 1);
this.EmitRecipe.emit(this.recipe.slice())
}
deleteIngredients(id, ingID){
    this.recipe[id].ingredients.splice(ingID,1);
    this.EmitRecipe.emit(this.recipe.slice())
}
}
