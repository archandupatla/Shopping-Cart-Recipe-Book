import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm, FormGroup, FormControl, FormArray } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
//import { FormArray } from '@angular/forms/src/model';
//import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit{
   id: number;
   editMode: boolean = false;
   editForm: FormGroup;
    constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router){}
    ngOnInit(){
     this.route.params.subscribe((params: Params)=>{
     this.id = +params['id'];
     this.editMode = params['id'] != null;
    this.initForm();
     console.log(this.editMode);
     })
    }
    private initForm(){
      let recipeName, recipeurl, description = '';
      const recipeIngredients = new FormArray([]);
      if(this.editMode){
        const recipe = this.recipeService.getRecipeByIndex(this.id);
        
        recipeName = recipe.name;
        recipeurl = recipe.imagePath;
        description = recipe.description;
        if(recipe['ingredients']){
        for(let ing of recipe.ingredients){
          recipeIngredients.push(new FormGroup({
            'name': new FormControl(ing.name),
            'amount': new FormControl(ing.amount)
          }))
        }
      }
    }
      this.editForm = new FormGroup({
        'recipeName': new FormControl(recipeName),
        'description': new FormControl(description),
        'recipeUrl': new FormControl(recipeurl),
        'ingredients': recipeIngredients
      })
    }
    getFormValue(){
      console.log(this.editForm.value)
    }
    AddIngredient(){
   (<FormArray>this.editForm.get('ingredients')).push(new FormGroup({
     'name': new FormControl(null),
     'amount': new FormControl(null)
   }))
}
onRecipeAdded(){
  let recipeName=this.editForm.get('recipeName').value;
  let recipeUrl = this.editForm.get('recipeUrl').value;
  let description = this.editForm.get('description').value;
  const recipe = new Recipe(recipeName, description, recipeUrl,this.editForm.value['ingredients'])
  this.editMode ? this.recipeService.updateRecipe(this.id, recipe) : this.recipeService.addRecipes(recipe)
}
deleteRecipe(){
  this.recipeService.deleteRecipe(this.id);
  this.editForm.reset();
  this.editMode = false;
  this.onCancel()
}
onCancel(){
this.router.navigate(['../'], {relativeTo: this.route})
}
deleteIng(ingID){
  console.log(this.id)
  if(this.editMode){
   this.recipeService.deleteIngredients(this.id, ingID);
  }

}
}