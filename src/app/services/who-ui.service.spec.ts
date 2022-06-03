import { TestBed } from '@angular/core/testing';

import { WhoUiService } from './who-ui.service';

describe('WhoUiService', () => {
  let service: WhoUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhoUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
