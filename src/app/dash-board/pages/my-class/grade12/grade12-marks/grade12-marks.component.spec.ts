import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grade12MarksComponent } from './grade12-marks.component';

describe('Grade12MarksComponent', () => {
  let component: Grade12MarksComponent;
  let fixture: ComponentFixture<Grade12MarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grade12MarksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Grade12MarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
