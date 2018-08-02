import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../Shared/ingredients.model';
import { ShoppingService } from './shoppingList.service'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  
})
export class ShoppingListComponent implements OnInit {
  ingredients = [];
  constructor( private shoppingService: ShoppingService) { }

  ngOnInit() {
   this.ingredients = this.shoppingService.getIngredients();
   this.shoppingService.ingredientsChanges.subscribe(
     (ing )=>{
             this.ingredients = ing;
     }
   )

  }
  onEdit(index){
    this.shoppingService.editStart.emit(index);
  }

  // IngredientsGot(data: Ingredients){
  //    this.ingredients.push(data);
  // }

}
