import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpsComponent } from './exps.component';

describe('ExpsComponent', () => {
  let component: ExpsComponent;
  let fixture: ComponentFixture<ExpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
