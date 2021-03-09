import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grade10LessonsComponent } from './grade10-lessons.component';

describe('Grade10LessonsComponent', () => {
  let component: Grade10LessonsComponent;
  let fixture: ComponentFixture<Grade10LessonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grade10LessonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Grade10LessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
