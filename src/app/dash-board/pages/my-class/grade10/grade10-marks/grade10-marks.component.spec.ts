import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grade10MarksComponent } from './grade10-marks.component';

describe('Grade10MarksComponent', () => {
  let component: Grade10MarksComponent;
  let fixture: ComponentFixture<Grade10MarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grade10MarksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Grade10MarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
