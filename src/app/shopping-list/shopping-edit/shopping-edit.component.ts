import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredients } from '../../Shared/ingredients.model';
import { ShoppingService } from '../shoppingList.service'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  editIndex: number;
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  editMode: boolean = false;
  @ViewChild('f') form: NgForm;
  ing: Ingredients;
  constructor(private shoppingService: ShoppingService) { }
   
  ngOnInit() {
    this.shoppingService.editStart.subscribe((index: number)=>{
      this.editIndex = index;
  this.editMode = true;
  this.ing = this.shoppingService.getIngredient(index);
  this.form.setValue({
    name: this.ing.name,
    amount: this.ing.amount
  })
    })
  }
  IngredientsAdded(f){
    const val = f.value;
  const newIngredient = new Ingredients(val.name, val.amount);
  if(this.editMode){
    this.shoppingService.updateIng(this.editIndex, newIngredient);
  }
  else{
    this.shoppingService.IngredientsAdded(newIngredient);
  }
  this.editMode = false;
    f.reset();
  }
  clearForm(){
   this.form.reset();
   this.editMode=false;
  }
  deleteIng(){
    this.shoppingService.deleteIng(this.editIndex);
    this.clearForm();
  }

}
