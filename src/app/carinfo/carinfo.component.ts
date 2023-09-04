import { Component,EventEmitter,Input, Output} from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-info',
  templateUrl: './carinfo.component.html',
})
export class CarInfoComponent {
  cars: any[] = []; // Array to store the list of cars
  @Input () selectedCar: any; // Store the selected car
  @Output() carInfoChanged = new EventEmitter<any>();
  onCarSelected(selectedCar: any) {
    console.log('Selected Car:', this.selectedCar.name);
    console.log('Description:', this.selectedCar.description);
    console.log('Value:', this.selectedCar.value);
    
    this.carInfoChanged.emit(selectedCar)
  }
  constructor(private carService: CarService) {
    this.cars = carService.getCars();
    // Initialize selectedCar to the first car in the array
    this.selectedCar = this.cars.length > 0 ? this.cars[0] : null;
  }


  
}