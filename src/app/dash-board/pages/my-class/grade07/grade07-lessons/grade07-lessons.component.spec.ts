import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grade07LessonsComponent } from './grade07-lessons.component';

describe('Grade07LessonsComponent', () => {
  let component: Grade07LessonsComponent;
  let fixture: ComponentFixture<Grade07LessonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grade07LessonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Grade07LessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
