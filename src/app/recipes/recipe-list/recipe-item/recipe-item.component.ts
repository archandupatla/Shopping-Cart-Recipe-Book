import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
   @Input() recipe: string;
   @Input() index: number;
   //@Output() recipeDetails = new EventEmitter<void>();
  constructor(private recipeService: RecipeService) { 
  }

  ngOnInit() {
  }
  // recipeName(data){
  //  this.recipeDetails.emit();
  //  //alert(data.name);
  //  //this.recipeService.selectedRecipe.emit(data);
  // }

}
