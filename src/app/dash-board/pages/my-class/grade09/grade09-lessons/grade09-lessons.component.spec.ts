import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grade09LessonsComponent } from './grade09-lessons.component';

describe('Grade09LessonsComponent', () => {
  let component: Grade09LessonsComponent;
  let fixture: ComponentFixture<Grade09LessonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grade09LessonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Grade09LessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
