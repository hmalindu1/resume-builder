import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertsHeaderComponent } from './certs-header.component';

describe('CertsHeaderComponent', () => {
  let component: CertsHeaderComponent;
  let fixture: ComponentFixture<CertsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertsHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
