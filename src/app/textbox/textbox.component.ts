import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
})
export class TextboxComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      numericInput: ['', [Validators.required, Validators.pattern('[0-9]{9}')]],
      emailInput: [''],
    });
  }

  // Getter method for the 'name' form control value
  get nameValue() {
    return this.myForm.get('name')?.value;
  }

  // Getter method for the 'numericInput' form control value
  get numericInputValue() {
    return this.myForm.get('numericInput')?.value;
  }

  // Getter method for the 'emailInput' form control value
  get emailInputValue() {
    return this.myForm.get('emailInput')?.value;
  }
}