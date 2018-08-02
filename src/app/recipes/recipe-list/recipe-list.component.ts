import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model'
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
@Output() RecipeSent = new EventEmitter<Recipe>();
  recipe: Recipe[] = [];
  constructor(private recipeService: RecipeService,private router: Router,  private route: ActivatedRoute, ) { }

  ngOnInit() {
    this.recipe = this.recipeService.getRecipes();
      this.recipeService.EmitRecipe.subscribe((val)=>{
        console.log(val)
        this.recipe = val;
          });
  }
  // recipeRecieved(result: Recipe){
  //   this.RecipeSent.emit(result);
  // }
  recipeRecieved(result: Recipe){
    this.RecipeSent.emit(result);
  }
  NavigateNewForm(){
   this.router.navigate(['new'], {relativeTo: this.route});
  }
}
