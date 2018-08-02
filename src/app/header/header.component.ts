import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  recipe: boolean = false;
  shopping: boolean = false;
  @Output() featureSent = new EventEmitter<{recipe: boolean, shopping: boolean}>();
  constructor() { }
  ngOnInit() {
  }
  recipeClicked(){
    this.recipe = true;
    this.shopping = false;
    this.featureSent.emit({recipe: this.recipe, shopping: this.shopping});
  }
  shoppingClicked(){
    this.shopping = true;
    this.recipe = false;
    this.featureSent.emit({recipe: this.recipe, shopping: this.shopping});
  }
}
