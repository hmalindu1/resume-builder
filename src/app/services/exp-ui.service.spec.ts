import { TestBed } from '@angular/core/testing';

import { ExpUiService } from './exp-ui.service';

describe('ExpUiService', () => {
  let service: ExpUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
