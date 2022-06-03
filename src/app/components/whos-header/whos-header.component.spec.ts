import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhosHeaderComponent } from './whos-header.component';

describe('WhosHeaderComponent', () => {
  let component: WhosHeaderComponent;
  let fixture: ComponentFixture<WhosHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhosHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhosHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
