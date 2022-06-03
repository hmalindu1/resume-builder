import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducsHeaderComponent } from './educs-header.component';

describe('EducsHeaderComponent', () => {
  let component: EducsHeaderComponent;
  let fixture: ComponentFixture<EducsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducsHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
