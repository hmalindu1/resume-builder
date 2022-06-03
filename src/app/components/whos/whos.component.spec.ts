import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhosComponent } from './whos.component';

describe('WhosComponent', () => {
  let component: WhosComponent;
  let fixture: ComponentFixture<WhosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
