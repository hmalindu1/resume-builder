import { TestBed } from '@angular/core/testing';

import { EducUiService } from './educ-ui.service';

describe('EducUiService', () => {
  let service: EducUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EducUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
