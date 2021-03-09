import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grade11MarksComponent } from './grade11-marks.component';

describe('Grade11MarksComponent', () => {
  let component: Grade11MarksComponent;
  let fixture: ComponentFixture<Grade11MarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grade11MarksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Grade11MarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
