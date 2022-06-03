import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoItemComponent } from './who-item.component';

describe('WhoItemComponent', () => {
  let component: WhoItemComponent;
  let fixture: ComponentFixture<WhoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhoItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
