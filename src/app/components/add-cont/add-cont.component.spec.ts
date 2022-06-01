import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContComponent } from './add-cont.component';

describe('AddContComponent', () => {
  let component: AddContComponent;
  let fixture: ComponentFixture<AddContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddContComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
