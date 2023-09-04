import { TestBed } from '@angular/core/testing';

import { SliderDataService } from './slider-data.service';

describe('SliderDataService', () => {
  let service: SliderDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SliderDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
