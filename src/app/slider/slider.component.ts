import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SliderDataService } from '../slider-data.service'; 

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
})
export class SliderComponent implements OnInit {
  @Input() maxValue: number = 60; 
  sliderValue: number = 12; 
  @Output() selectedOptionChange = new EventEmitter<number>();
  @Output() sliderValueChange = new EventEmitter<number>(); 
  constructor(private sliderDataService: SliderDataService) {}

  onOptionSelected(option: string) {

    if (option === 'option1') {
      this.sliderValue = 48;
    } else {
      this.sliderValue = 12; 
    }
    this.selectedOptionChange.emit(this.sliderValue);
    this.sliderValueChange.emit(this.sliderValue);
  }

  ngOnInit() {

    this.sliderDataService.maxValue$.subscribe((maxValue) => {
      if (this.sliderValue > maxValue) {
        this.sliderValue = maxValue;
        this.selectedOptionChange.emit(this.sliderValue);
        this.sliderValueChange.emit(this.sliderValue);
      }
      this.maxValue = maxValue;
    });
  }
}

