import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grade12LessonsComponent } from './grade12-lessons.component';

describe('Grade12LessonsComponent', () => {
  let component: Grade12LessonsComponent;
  let fixture: ComponentFixture<Grade12LessonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grade12LessonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Grade12LessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
