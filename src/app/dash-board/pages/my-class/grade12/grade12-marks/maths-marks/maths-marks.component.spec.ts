import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathsMarksComponent } from './maths-marks.component';

describe('MathsMarksComponent', () => {
  let component: MathsMarksComponent;
  let fixture: ComponentFixture<MathsMarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MathsMarksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MathsMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
