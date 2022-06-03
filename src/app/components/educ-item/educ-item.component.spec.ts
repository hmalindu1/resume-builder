import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducItemComponent } from './educ-item.component';

describe('EducItemComponent', () => {
  let component: EducItemComponent;
  let fixture: ComponentFixture<EducItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
