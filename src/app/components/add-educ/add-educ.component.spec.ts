import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEducComponent } from './add-educ.component';

describe('AddEducComponent', () => {
  let component: AddEducComponent;
  let fixture: ComponentFixture<AddEducComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEducComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEducComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
