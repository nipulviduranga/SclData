import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grade11LessonsComponent } from './grade11-lessons.component';

describe('Grade11LessonsComponent', () => {
  let component: Grade11LessonsComponent;
  let fixture: ComponentFixture<Grade11LessonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grade11LessonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Grade11LessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
