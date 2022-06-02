import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertItemComponent } from './cert-item.component';

describe('CertItemComponent', () => {
  let component: CertItemComponent;
  let fixture: ComponentFixture<CertItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
