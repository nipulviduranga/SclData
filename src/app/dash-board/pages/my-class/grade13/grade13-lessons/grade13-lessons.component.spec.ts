import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grade13LessonsComponent } from './grade13-lessons.component';

describe('Grade13LessonsComponent', () => {
  let component: Grade13LessonsComponent;
  let fixture: ComponentFixture<Grade13LessonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grade13LessonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Grade13LessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
