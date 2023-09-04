import { Injectable } from '@angular/core';
import { carConfig } from './car-config';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  getCars() {
    return carConfig;
  }
}