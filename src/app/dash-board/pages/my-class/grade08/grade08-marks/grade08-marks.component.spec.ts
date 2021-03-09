import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grade08MarksComponent } from './grade08-marks.component';

describe('Grade08MarksComponent', () => {
  let component: Grade08MarksComponent;
  let fixture: ComponentFixture<Grade08MarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grade08MarksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Grade08MarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
