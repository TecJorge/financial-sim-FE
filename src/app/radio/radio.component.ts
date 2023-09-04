import { Component, EventEmitter, Output } from '@angular/core';
import { SliderDataService } from '../slider-data.service';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
})
export class RadioComponent {
  selectedOption: string = 'interno'; 
  @Output() optionSelected = new EventEmitter<string>();

  constructor(private sliderDataService: SliderDataService) {}

  onOptionSelected(option: string) {
    this.selectedOption = option;
    this.optionSelected.emit(this.selectedOption)


    const maxValue = option === 'interno' ? 48 : 60;
    this.sliderDataService.setMaxValue(maxValue);
  }
}