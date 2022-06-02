import { TestBed } from '@angular/core/testing';

import { CertUiService } from './cert-ui.service';

describe('CertUiService', () => {
  let service: CertUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CertUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
