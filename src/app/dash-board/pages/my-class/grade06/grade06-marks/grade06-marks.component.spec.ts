import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grade06MarksComponent } from './grade06-marks.component';

describe('Grade06MarksComponent', () => {
  let component: Grade06MarksComponent;
  let fixture: ComponentFixture<Grade06MarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grade06MarksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Grade06MarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
