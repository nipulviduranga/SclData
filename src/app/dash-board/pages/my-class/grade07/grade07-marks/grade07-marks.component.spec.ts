import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grade07MarksComponent } from './grade07-marks.component';

describe('Grade07MarksComponent', () => {
  let component: Grade07MarksComponent;
  let fixture: ComponentFixture<Grade07MarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grade07MarksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Grade07MarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
