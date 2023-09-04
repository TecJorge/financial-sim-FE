import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SliderDataService {
  private maxValueSubject = new BehaviorSubject<number>(48);
  maxValue$ = this.maxValueSubject.asObservable();

  setMaxValue(maxValue: number) {
    this.maxValueSubject.next(maxValue);
  }
}
