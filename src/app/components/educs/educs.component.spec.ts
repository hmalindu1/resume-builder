import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducsComponent } from './educs.component';

describe('EducsComponent', () => {
  let component: EducsComponent;
  let fixture: ComponentFixture<EducsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
