import { EventEmitter, OnDestroy, Output } from '@angular/core';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.mode';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  sub!: Subscription;

  // @ViewChild('nameInput') nameInputRef!: ElementRef;
  // @ViewChild('amountInput') amountInputRef!: ElementRef;

  @ViewChild('shoppingItemForm') shoppingItemForm!: NgForm;

  editedItem?: Ingredient;
  editedIndex?: number;
  editMode: boolean = false;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.sub = this.shoppingListService.startingEditing.subscribe(item => {
      this.editMode = true;
      this.editedIndex = item;
      this.editedItem = this.shoppingListService.getIngredient(this.editedIndex);;

      this.shoppingItemForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      })
    })
  }

  onAddItem(form: any) :void {

    //console.log(form);

    const valName = form.value.name;
    const valAmount = form.value.amount;

    // const valName = this.nameInputRef.nativeElement.value;
    // const valAmount = this.amountInputRef.nativeElement.value;

    const newInd = new Ingredient(valName, valAmount);

    if (this.editMode && this.editedIndex != undefined){

      this.shoppingListService.updateIngredient(this.editedIndex, newInd);
      this.editMode = false;

    } else {
      this.shoppingListService.addIngredient(newInd);
    }

    this.shoppingItemForm.reset();
  }

  onClear() {
    this.shoppingItemForm.reset();
    this.editMode = false;
  }

  onDelete() {
    if (this.editMode && this.editedIndex != undefined) {
      this.shoppingListService.deleteIngredient(this.editedIndex);
    }
    this.onClear();
  }

}
