import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarInfoComponent } from './carinfo.component';

describe('CarinfoComponent', () => {
  let component: CarInfoComponent;
  let fixture: ComponentFixture<CarInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarInfoComponent]
    });
    fixture = TestBed.createComponent(CarInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
