import { TestBed } from '@angular/core/testing';

import { CarUiService } from './car-ui.service';

describe('CarUiService', () => {
  let service: CarUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
