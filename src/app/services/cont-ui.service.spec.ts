import { TestBed } from '@angular/core/testing';

import { ContUiService } from './cont-ui.service';

describe('ContUiService', () => {
  let service: ContUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
