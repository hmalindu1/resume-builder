import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWhoComponent } from './add-who.component';

describe('AddWhoComponent', () => {
  let component: AddWhoComponent;
  let fixture: ComponentFixture<AddWhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWhoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
