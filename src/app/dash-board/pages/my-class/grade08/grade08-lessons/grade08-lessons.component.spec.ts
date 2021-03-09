import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grade08LessonsComponent } from './grade08-lessons.component';

describe('Grade08LessonsComponent', () => {
  let component: Grade08LessonsComponent;
  let fixture: ComponentFixture<Grade08LessonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grade08LessonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Grade08LessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
