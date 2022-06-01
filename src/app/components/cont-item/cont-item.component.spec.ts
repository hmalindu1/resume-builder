import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContItemComponent } from './cont-item.component';

describe('ContItemComponent', () => {
  let component: ContItemComponent;
  let fixture: ComponentFixture<ContItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
