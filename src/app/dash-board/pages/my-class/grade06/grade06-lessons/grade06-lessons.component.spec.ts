import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grade06LessonsComponent } from './grade06-lessons.component';

describe('Grade06LessonsComponent', () => {
  let component: Grade06LessonsComponent;
  let fixture: ComponentFixture<Grade06LessonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grade06LessonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Grade06LessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
