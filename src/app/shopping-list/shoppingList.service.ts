import { EventEmitter } from '@angular/core'
import { Ingredients } from '../Shared/ingredients.model'
export class ShoppingService{
    ingredientsChanges = new EventEmitter<Ingredients[]>();
    editStart = new EventEmitter<number>();
private Ingredients: Ingredients[] = [
    new Ingredients("apples", 5), 
    new Ingredients("tomates", 6)
  ];
  getIngredients(){
      return this.Ingredients.slice();
  }
  getIngredient(id){
      return this.Ingredients[id];
  }
  updateIng(index, newing){
      this.Ingredients[index]= newing;
      this.ingredientsChanges.emit(this.Ingredients.slice());
  }
  IngredientsAdded(ingredient: Ingredients){
      this.Ingredients.push(ingredient);
      this.ingredientsChanges.emit(this.Ingredients.slice());
  }
  deleteIng(index){
   this.Ingredients.splice(index,1);
   this.ingredientsChanges.emit(this.Ingredients.slice())
  }
}