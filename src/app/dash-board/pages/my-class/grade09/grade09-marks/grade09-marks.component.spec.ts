import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grade09MarksComponent } from './grade09-marks.component';

describe('Grade09MarksComponent', () => {
  let component: Grade09MarksComponent;
  let fixture: ComponentFixture<Grade09MarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grade09MarksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Grade09MarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
