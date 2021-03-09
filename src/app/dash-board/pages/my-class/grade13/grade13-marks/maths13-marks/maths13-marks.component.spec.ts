import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Maths13MarksComponent } from './maths13-marks.component';

describe('MathsMarksComponent', () => {
  let component: Maths13MarksComponent;
  let fixture: ComponentFixture<Maths13MarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Maths13MarksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Maths13MarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
